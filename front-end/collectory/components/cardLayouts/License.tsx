import React from "react";
import { Text, ImageBackground, View } from "react-native";
import styles from "../styling/style";

type LicenseProps = {
    idLicense: string;
    image: string;
    onPress: (id: string) => void;
}

const License = ({idLicense, image, onPress}: LicenseProps) => {
 
    return (
        <View onTouchStart={() => onPress(idLicense)} style={{width: '50%'}}>
            <ImageBackground id={idLicense} source={image} resizeMode="contain" style={styles.license} >
                    <Text style={styles.postTextImage}>{idLicense}</Text>
            </ImageBackground>
        </View>
    )
}

export default License;
