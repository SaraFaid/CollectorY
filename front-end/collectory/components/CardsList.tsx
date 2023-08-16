import { ScrollView, View } from "react-native";  
import React from "react";
import styles from "./styling/style";
import Card from "./Card";

const CardsList = () => {
    return (
            <ScrollView style={styles.scrollContainer}>
                <View style={{flexDirection: "row"}} key={1}>
                <Card />
                <Card />
                <Card />
                </View>
                <View style={{flexDirection: "row"}} key={2}>
                <Card />
                <Card />
                <Card />
                </View>
                <View style={{flexDirection: "row"}} key={3}>
                <Card />
                <Card />
                <Card />
                </View>
            </ScrollView>
    )
}

export default CardsList;