import { View, Text } from "react-native";
import styles from "../styling/style";
import React from "react";
import LicenseList from "../LicenseList";

const CardsHome = () => {

    return (
        <>
            <Text style={styles.titleContent}>All the types of cards here</Text>
            <View style={styles.content}>
                <LicenseList />
            </View>
        </>
    )
}

export default CardsHome;