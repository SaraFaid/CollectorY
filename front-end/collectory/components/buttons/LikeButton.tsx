import React from "react";
import colors from "../styling/colors";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../styling/style";

type LikeButtonProps = {
    onPress: () => void;
    alreadyPressed: boolean;
}

export default function LikeButton ({ onPress, alreadyPressed}: LikeButtonProps) {  
    return (
        <View style={alreadyPressed? styles.selectedLikeButton : styles.likeButton }>
            <Icon name={alreadyPressed? "thumb-up" : "thumb-up-outline"} size={40} color={colors.dark} onPress={() => onPress()}/>
        </View>       
        )
}