import React, { useEffect } from "react";
import { FlatList, SafeAreaView, SectionList, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getSets } from "../../services/pokemonAPI";
import CardsList from "../cardLayouts/CardsList";
import License from "../cardLayouts/License";
import colors from "../styling/colors";
import styles from "../styling/style";

const CardsHome = () => {

    const [isPokemonPressed, setIsPokemonPressed] = React.useState(false);
    const [isYugiohPressed, setIsYugiohPressed] = React.useState(false);
    const [isMagicPressed, setIsMagicPressed] = React.useState(false);
    const [isNarutoPressed, setIsNarutoPressed] = React.useState(false);
    const [ research, setResearch ] = React.useState("");

    const [isSetPressed, setIsSetPressed] = React.useState(false);
    const [choosenSet, setChoosenSet] = React.useState("")

    if (!isSetPressed && choosenSet !== "") { setChoosenSet("") }

    const onLicensePress = (id: string) => {
        console.log("pressed");
        // get the id of the license and send back to the list of cards of that license
        
        switch (id) {
            case "Pokémon":
                setIsPokemonPressed(true);
                break;
            case "Yu-Gi-Oh":
                setIsYugiohPressed(true);
                break;
            case "Magic The Gathering":
                setIsMagicPressed(true);
                break;
            case "Naruto":
                setIsNarutoPressed(true);
                break;
            default:
                break;
        }
    }

    //LICENSES
    const id1 = "Pokémon";
    const id2 = "Yu-Gi-Oh";
    const id3 = "Magic The Gathering";
    const id4 = "Naruto";


    const dataLicenses = [
        {
            name: id1,
            image: require("../../assets/logos/Pokémon_TCG.png"),
        },
        {
            name: id2,
            image: require("../../assets/logos/Yu_Gi_Oh_TCG.png"),
        },
        {
            name: id3,
            image: require("../../assets/logos/Magic_The_Gathering_TCG.png"),
        },
        {
            name: id4,
            image: require("../../assets/logos/Naruto_TCG.png"),
        },
    ]


    // BLOCKS AND SETS
    const [blocks, setBlocks] = React.useState<{ title: string; data: string[]; }[]>([]);
    const [sets, setSets] = React.useState<{ id: string, name: string }[]>([]);
    const [openedBlocks, setOpenedBlocks] = React.useState<string[]>([]);

    const request = async () => { await getSets()
        .then((sets) => {
            let tmp: { title: string, data: string[] }[] = []
            sets.forEach((set: any) => {
                if (tmp.filter((b) => b.title === set.series).length === 0)
                {
                    tmp.push({title: set.series, data: [set.name]});
                }else{
                    const indexChange = tmp.findIndex((b) => b.title === set.series)
                    if(indexChange >= 0) tmp[indexChange].data.push(set.name)
                    else tmp.push({title: set.series, data: [set.name]});
                }
                setSets((sets) => [...sets, {id: set.id, name: set.name}]);
            })
            setBlocks(tmp)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        request();
    }, [])


    let index = 0

    const onToggleSet = (title: string) => {
        //openedBlocks.find((b) => b === title) ? openedBlocks.splice(openedBlocks.indexOf(title), 1) : openedBlocks.push(title);
        if(openedBlocks.find((b) => b === title)){
            setOpenedBlocks(openedBlocks.filter((b) => b !== title))
        }else{
            setOpenedBlocks([...openedBlocks, title])
        }
    }

    const onSetPress = (set: string) => {
        const setID = sets.filter(s => s.name === set)[0].id;
        setIsSetPressed(true);
        setChoosenSet(setID);
    }

    return (
        <>
        {
            isPokemonPressed || isYugiohPressed || isMagicPressed || isNarutoPressed?
            isSetPressed? <Icon name='keyboard-backspace' size={30} color={colors.dark} onPress={() => {
                setIsSetPressed(false);
            }}/> :
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>

                <Icon name='keyboard-backspace' size={30} color={colors.dark} onPress={() => {
                    setIsPokemonPressed(false);
                    setIsYugiohPressed(false);
                    setIsMagicPressed(false);
                    setIsNarutoPressed(false);
                }}/>
            <TextInput
            style={styles.researchInput}
            placeholder="Card name"
            inputMode="text"
            textContentType="name"
            onChangeText={(text) => setResearch(text)}
            />
            
            </View>
          :
            <Text style={styles.titleContent}>All the types of cards here</Text>
        }
                {!isPokemonPressed && !isYugiohPressed && !isMagicPressed && !isNarutoPressed?
                <View style={styles.largeContent}>
                    <FlatList data={dataLicenses} renderItem={({item}) => <License idLicense={item.name} image={item.image} onPress={() => onLicensePress(item.name)}/>} keyExtractor={item => item.name} numColumns={2}/>
                </View>
                :
                isSetPressed? <CardsList idSet={choosenSet} nameSet={sets.find((set) => set.id === choosenSet)?.name}/>
                :
                <SafeAreaView style={styles.largeContent}>
                <SectionList sections={blocks} keyExtractor={(item, index) => item + index} renderItem={
                    ({section}) => 
                    {
                        index ++;
                        if( index > section.data.length) index = 1;
                        if (openedBlocks.find((b) => b === section.title)) {
                            const tmp = section.data[index-1];
                            return <Text style={styles.setText} onPress={() => onSetPress(tmp)}>{tmp}</Text>
                        }
                        else return <></>;
                    }
                } 
                renderSectionHeader={({section}) => <Text style={styles.blockText} onPress={() => onToggleSet(section.title)}>{section.title}</Text>
                }/>
            </SafeAreaView>
                }
            
        </>
    )
}

export default CardsHome;