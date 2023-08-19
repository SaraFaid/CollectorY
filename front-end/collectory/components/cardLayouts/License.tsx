import React from "react";
import { Text, ImageBackground, View } from "react-native";
import styles from "../styling/style";

type LicenseProps = {
    idLicense: string;
    onPress: (id: string) => void;
}

const License = ({idLicense, onPress}: LicenseProps) => {

    return (
        <View onTouchStart={() => onPress(idLicense)} style={{width: '50%'}}>
            <ImageBackground id={idLicense} source={require("../../mock/images/venusaur-1.jpg")} style={styles.license} >
                    <Text style={styles.postTextImage}>Set {idLicense}</Text>
            </ImageBackground>
        </View>
    )
}

export default License;
