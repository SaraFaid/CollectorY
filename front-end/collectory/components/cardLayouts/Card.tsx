import React from "react";
import { Text, ImageBackground } from "react-native";
import styles from "../styling/style";

type CardsProps = {
    image: string;
    cardName: string;
    cardId: string;
}

const Card = ({image, cardName, cardId}: CardsProps) => {
    const path = {uri: image}
    return (
        <>
            <ImageBackground source={path} style={styles.card} resizeMode="cover" key={cardId}>
                    <Text style={styles.postTextImage}>{cardName}</Text>
            </ImageBackground>
        </>
    )
}

export default Card;
