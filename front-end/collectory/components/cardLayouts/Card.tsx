import React from "react";
import { Text, ImageBackground } from "react-native";
import styles from "../styling/style";

const Card = () => {
    return (
        <>
            <ImageBackground source={require("../../mock/images/pikachu-full.jpg")} style={styles.card} resizeMode="cover">
                    <Text style={styles.postTextImage}>Set</Text>
            </ImageBackground>
        </>
    )
}

export default Card;
