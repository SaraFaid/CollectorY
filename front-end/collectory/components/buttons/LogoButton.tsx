import React from "react";
import colors from "../styling/colors";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../styling/style";

type LogoButtonProps = {
    name: string;
    onPress: (name: string) => void;
    selected: boolean;
}

export default function LogoButton ({ name, onPress, selected}: LogoButtonProps) {

    let iconName = "star-four-points"
    switch (name) {
        case "profile":
            iconName = "account-circle"
            if (selected) iconName = "account-circle-outline"
            break;
        case "collectory":
            iconName = "account-group"
            if (selected) iconName = "account-group-outline"
            break;
        case "collections":
            iconName = "book-multiple"
            if (selected) iconName = "book-multiple-outline"
            break;
        case "cards":
            iconName = "card-multiple"
            if (selected) iconName = "card-multiple-outline"
            break;
        default:
            iconName = "star-four-points"
            if (selected) iconName = "star-four-points-outline"
            break;
    }

    return (
        <View style={selected? styles.selectedLogoButton : styles.logoButton}>
            <Icon name={iconName} size={40} color={selected ? colors.light : colors.dark} onPress={() => onPress(name)}/>
        </View>       
        )
}