// styled buton component
import React from "react";
import { View, Button } from "react-native";
import styles from "./style";

type StyledButtonProps = {
    title: string;
    onPress: () => void;
    color: string;
    disabled: boolean;
}

export default function StyledButton ({ title, onPress, color, disabled}: StyledButtonProps) {
    return (
        <View style={styles.styledButtonView}>
            {disabled ? <Button title={title} color={color} onPress={onPress} disabled/> : <Button title={title} color={color} onPress={onPress} />}
        </View>
    )
}