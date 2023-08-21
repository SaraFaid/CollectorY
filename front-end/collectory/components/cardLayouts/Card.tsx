import React from "react";
import { Text, ImageBackground, Pressable } from "react-native";
import styles from "../styling/style";

type CardsProps = {
    card : any;
    onPress: (card: any) => void;
}

const Card = ({card, onPress}: CardsProps) => {
    const path = {uri: card.images.small}
    return (
        <Pressable onPress={() => onPress(card)} style={styles.pressableCard}>
            <ImageBackground source={path} style={styles.card}  resizeMode="contain" key={card.id}>
                    <Text style={styles.postTextImage}>{card.name}</Text>
            </ImageBackground>
        </Pressable>
    )
}

export default Card;
