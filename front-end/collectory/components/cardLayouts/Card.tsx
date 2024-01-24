import React from "react";
import { Text, ImageBackground, Pressable } from "react-native";
import styles from "../styling/style";

type CardsProps = {
    card : any;
    onPress: (card: any) => void;
    margin?: number;
}

const Card = ({card, onPress, margin}: CardsProps) => {
    const path = {uri: card.images.small}
    const nb = margin ? margin : 0;
    return (
        <Pressable onPress={() => onPress(card)} style={[styles.pressableCard, {marginHorizontal: nb}]}>
            <ImageBackground source={path} style={styles.card}  resizeMode="contain" key={card.id}>
                    <Text style={styles.postTextImage}>{card.name}</Text>
            </ImageBackground>
        </Pressable>
    )
}

export default Card;
