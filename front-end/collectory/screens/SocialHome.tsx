import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { View, Text } from "react-native";
import styles from "../components/style";
import React from "react";
import BackBar from "../components/BackBar";

type SocialHomeProps = NativeStackScreenProps<RootStackParamList, "SocialHome">;

const SocialHome: React.FC<SocialHomeProps> = (props) => {

    const selected = "collectory";

    return (
        <View style={styles.container}>
            <BackBar selected={selected} navigation={props.navigation}/>
            <Text style={styles.titleContent}>Your friends' feed HERE</Text>
            <View style={styles.content}>
            </View>
        </View>
    )
}

export default SocialHome;