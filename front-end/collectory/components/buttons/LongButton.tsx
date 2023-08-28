import React from "react";
import { Pressable, Text } from "react-native";
import styles from "../styling/style";

type LongButtonProps = {
    title: string;
    onPress: () => void;
}

export default function LongButton ({ title, onPress }: LongButtonProps) {
    return (
        <Pressable style={styles.longButtonView} onPress={onPress}>
            <Text style={styles.longButtonText}>{title}</Text>
        </Pressable>
    )
}