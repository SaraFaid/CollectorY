import React from "react";  
import { View, Text, SectionList, SafeAreaView} from "react-native";
import styles from "../styling/style";

const Set = () => {

    const [isBlock1Pressed, setIsBlock1Pressed] = React.useState(false);
    const [isBlock2Pressed, setIsBlock2Pressed] = React.useState(false);
    const [isBlock3Pressed, setIsBlock3Pressed] = React.useState(false);

    const blocks = [
        {
            title: "Block 1",
            data: ["Set 1", "Set 2", "Set 3"]   
        },
        {
            title: "Block 2",
            data: ["Set 4", "Set 5", "Set 6"]   
        },
        {
            title: "Block 3",
            data: ["Set 7", "Set 8", "Set 9"]
        }
    ]

    const onToggleSet = (title: String) => {
        switch (title) {
            case "Block 1":
                setIsBlock1Pressed(!isBlock1Pressed);
                break;
            case "Block 2":
                setIsBlock2Pressed(!isBlock2Pressed);
                break;
            case "Block 3":
                setIsBlock3Pressed(!isBlock3Pressed);
                break;
            default:
                break;
    }

}
let index = 0

    return (
        <SafeAreaView>
            <SectionList sections={blocks} keyExtractor={(item, index) => item + index} renderItem={
                ({section}) => 
                {
                    index ++;
                    if( index > section.data.length) index = 1;
                    if ((isBlock1Pressed && section.title === "Block 1") || (isBlock2Pressed && section.title === "Block 2") || (isBlock3Pressed && section.title === "Block 3")) return <Text style={styles.setText}>{section.data[index - 1]}</Text>
                    else return <></>;
                }
            } 
            renderSectionHeader={({section}) => <Text style={styles.blockText} onPress={() => onToggleSet(section.title)}>{section.title}</Text>
            }/>
        </SafeAreaView>
    )
}

export default Set;