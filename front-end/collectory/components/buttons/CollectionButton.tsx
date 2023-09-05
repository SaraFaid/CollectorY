import React from "react";
import { Pressable, Text } from "react-native";
import styles from "../styling/style";

type CollectionButtonProps = {
    collectionName: string;
    onPress: () => void;
}

export default function CollectionButton ({ collectionName, onPress }: CollectionButtonProps) {
    return (
        <Pressable style={styles.collectionButtonView} onPress={onPress} >
            <Text style={styles.longButtonText}>{collectionName}</Text>
        </Pressable>
    )
}