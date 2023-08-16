import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { View, Text } from "react-native";
import styles from "../components/style";
import React from "react";
import BackBar from "../components/BackBar";

type CardsHomeProps = NativeStackScreenProps<RootStackParamList, "CardsHome">;

const CardsHome: React.FC<CardsHomeProps> = (props) => {

    const selected = "cards";

    return (
        <View style={styles.container}>
            <BackBar selected={selected} navigation={props.navigation}/>
            <Text style={styles.titleContent}>All the types of cards here</Text>
            <View style={styles.content}>
            </View>
        </View>
    )
}

export default CardsHome;