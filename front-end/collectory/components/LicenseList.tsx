import { ScrollView, View } from "react-native";  
import React from "react";
import styles from "./styling/style";
import License from "./License";

const LicenseList = () => {
    return (
            <ScrollView style={styles.scrollContainer}>
                <View style={{flexDirection: "row"}} key={1}>
                <License />
                <License />
                </View>
                <View style={{flexDirection: "row"}} key={2}>
                <License />
                <License />
                </View>
            </ScrollView>
    )
}

export default LicenseList;