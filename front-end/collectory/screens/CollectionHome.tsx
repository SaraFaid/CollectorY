import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { View, Text } from "react-native";
import styles from "../components/style";
import React from "react";
import BackBar from "../components/BackBar";

type CollectionHomeProps = NativeStackScreenProps<RootStackParamList, "CollectionHome">;

const CollectionHome: React.FC<CollectionHomeProps> = (props) => {

    const selected = "collections";

    return (
        <View style={styles.container}>
            <BackBar selected={selected} navigation={props.navigation}/>
            <Text style={styles.titleContent}>Welcome in your Collections</Text>
            <View style={styles.content}>
            </View>

        </View>
    )
}

export default CollectionHome;