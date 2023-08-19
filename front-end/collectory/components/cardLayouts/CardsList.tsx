import { ScrollView, View, Text } from "react-native";  
import React from "react";
import styles from "../styling/style";
import Card from "./Card";
import dataCards from "../../mock/mockedCards.json"
import colors from "../styling/colors";

type CardsListProps = {
    idSet: string;
}

const CardsList = ({idSet}: CardsListProps ) => {


    // const filledList = () => {
    //     let index = 0;
    //     const result = dataCards.map((card) => {
    //         while(index <3) {
    //         }

    return (
            <View style={styles.darkLargeContent}>
                <Text style={styles.darkTitleContent}>{idSet}</Text>
                <View style={{flexDirection: "row", width: '100%'}} key={1}>
                <Card />
                <Card />
                <Card />
                </View>
                <View style={{flexDirection: "row", width: '100%'}} key={2}>
                <Card />
                <Card />
                <Card />
                </View>
                <View style={{flexDirection: "row", width: '100%'}} key={3}>
                <Card />
                <Card />
                <Card />
                </View>
                <View style={{flexDirection: "row", width: '100%'}} key={4}>
                <Card />
                <Card />
                <Card />
                </View>
                <View style={{flexDirection: "row", width: '100%'}} key={5}>
                <Card />
                <Card />
                <Card />
                </View>
                <View style={{flexDirection: "row", width: '100%'}} key={6}>
                <Card />
                <Card />
                <Card />
                </View>
            </View>
    )
}

export default CardsList;