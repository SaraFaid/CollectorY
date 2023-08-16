import React from "react";
import { Text, ImageBackground } from "react-native";
import styles from "./styling/style";

const License = () => {
    return (
        <>
            <ImageBackground source={require("../../assets/images/venusaur-1.jpg")} style={styles.postImage}>
                    <Text style={styles.postTextImage}>Set</Text>
            </ImageBackground>
        </>
    )
}

export default License;
