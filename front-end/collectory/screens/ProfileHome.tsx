import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { View, Text } from "react-native";
import styles from "../components/style";
import React from "react";
import BackBar from "../components/BackBar";

type ProfileHomeProps = NativeStackScreenProps<RootStackParamList, "ProfileHome">;

const ProfileHome: React.FC<ProfileHomeProps> = (props) => {

    const selected = "profile";

    return (
        <View style={styles.container}>
            <BackBar selected={selected} navigation={props.navigation}/>
            <Text style={styles.titleContent}>Your Account HERE</Text>
            <View style={styles.content}>
            </View>
        </View>
    )
}

export default ProfileHome;