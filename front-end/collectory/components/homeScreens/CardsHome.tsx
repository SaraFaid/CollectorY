import { View, Text, TextInput, SafeAreaView, SectionList, SectionListData } from "react-native";
import styles from "../styling/style";
import React from "react";
import License from "../cardLayouts/License";
import CardsList from "../cardLayouts/CardsList"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Set from "../cardLayouts/Set";
import colors from "../styling/colors";
import dataBlocks from "../../mock/mockedBlocks.json"

const CardsHome = () => {

    const [isPokemonPressed, setIsPokemonPressed] = React.useState(false);
    const [isYugiohPressed, setIsYugiohPressed] = React.useState(false);
    const [isMagicPressed, setIsMagicPressed] = React.useState(false);
    const [isNarutoPressed, setIsNarutoPressed] = React.useState(false);
    const [ research, setResearch ] = React.useState("");

    const [isSetPressed, setIsSetPressed] = React.useState(false);
    const [choosenSet, setChoosenSet] = React.useState("")

    const onLicensePress = (id: string) => {
        console.log("pressed");
        // get the id of the license and send back to the list of cards of that license
        
        switch (id) {
            case "pokemon":
                setIsPokemonPressed(true);
                break;
            case "yugioh":
                setIsYugiohPressed(true);
                break;
            case "magic":
                setIsMagicPressed(true);
                break;
            case "naruto":
                setIsNarutoPressed(true);
                break;
            default:
                break;
        }


    }

    const id1 = "pokemon";
    const id2 = "yugioh";
    const id3 = "magic";
    const id4 = "naruto";


    let blocks: { title: string; data: string[]; }[] = []

    dataBlocks.forEach(block => {
        if (blocks.filter(b => b.title === block.series).length === 0)
        {
            blocks.push({title: block.series, data: [block.name]})
        }else{
            blocks.filter(b => b.title === block.series)[0].data.push(block.name)
        }
    })

    const [isBlock1Pressed, setIsBlock1Pressed] = React.useState(false);
    const [isBlock2Pressed, setIsBlock2Pressed] = React.useState(false);
    const [isBlock3Pressed, setIsBlock3Pressed] = React.useState(false);
    const [isBlock4Pressed, setIsBlock4Pressed] = React.useState(false);

    let index = 0

    const onToggleSet = (title: String) => {
        switch (title) {
            case "Base":
                setIsBlock1Pressed(!isBlock1Pressed);
                break;
            case "Gym":
                setIsBlock2Pressed(!isBlock2Pressed);
                break;
            case "Neo":
                setIsBlock3Pressed(!isBlock3Pressed);
                break;
            case "Other":
                setIsBlock4Pressed(!isBlock4Pressed);
            default:
                break;
        }
    }

    const onSetPress = (set: string) => {
        setIsSetPressed(true);
        setChoosenSet(set);
    }

    return (
        <>
        {
            isPokemonPressed || isYugiohPressed || isMagicPressed || isNarutoPressed?
            isSetPressed? <Icon name='keyboard-backspace' size={30} color={colors.dark} onPress={() => {
                setIsSetPressed(false);
                setChoosenSet("");
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
            placeholder="Pokemon name"
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
                    <View style={{flexDirection: "row", alignItems: 'center'}} key={1}>
                        <License idLicense={id1} onPress={() => onLicensePress(id1)}/>
                        <License idLicense={id2} onPress={() => onLicensePress(id2)} />
                    </View>
                    <View style={{flexDirection: "row", alignItems: 'center'}} key={2}>
                        <License idLicense={id3} onPress={() => onLicensePress(id3)}/>
                        <License idLicense={id4} onPress={() => onLicensePress(id4)}/>
                    </View>
                </View> :
                isSetPressed? <CardsList idSet={choosenSet}/> :
                <SafeAreaView style={styles.largeContent}>
                <SectionList sections={blocks} keyExtractor={(item, index) => item + index} renderItem={
                    ({section}) => 
                    {
                        index ++;
                        if( index > section.data.length) index = 1;
                        if ((isBlock1Pressed && section.title === "Base") || (isBlock2Pressed && section.title === "Gym") || (isBlock3Pressed && section.title === "Neo")) return <Text style={styles.setText} onPress={() => onSetPress(section.data[index - 1])}>{section.data[index - 1]}</Text>
                        else return <></>;
                    }
                } 
                renderSectionHeader={({section}) => <Text style={styles.blockText} onPress={() => onToggleSet(section.title)}>{section.title}</Text>
                }/>
            </SafeAreaView>
                //<CardsList idLicense= {isPokemonPressed? id1 : isYugiohPressed? id2 : isMagicPressed? id3 : id4} />
                }
            
        </>
    )
}

export default CardsHome;