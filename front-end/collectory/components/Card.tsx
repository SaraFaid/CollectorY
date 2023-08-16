import React from "react";
import { Text, ImageBackground } from "react-native";
import styles from "./styling/style";

const Card = () => {
    return (
        <>
            <ImageBackground source={require("../../assets/images/pikachu-full.jpg")} style={styles.card}>
                    <Text style={styles.postTextImage}>Set</Text>
            </ImageBackground>
        </>
    )
}

export default Card;
