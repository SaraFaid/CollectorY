import { View, Text } from "react-native";
import styles from "../styling/style";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import StyledButton from "../buttons/StyledButton";
import colors from "../styling/colors";
import { LogUserOut } from "../../services/userAPI";

type ProfileHomeProps = {
    user: JSON,
    nav: NavigationProp<any,any>
}

const ProfileHome = ({user, nav}: ProfileHomeProps) => {

    const userLogged = JSON.parse(JSON.stringify(user))

    const logUserOut = async () => {
        if(await LogUserOut()) nav.navigate("LogIn")
        else console.log("Error while logging out")
    }

    return (
        <>
            <Text style={styles.titleContent}>Your Account HERE</Text>
            <View style={styles.content}>
                <Text style={styles.textContent}>
                    Welcome {userLogged.username}!
                </Text>
                <StyledButton
                    title="Log Out"
                    color={colors.dark}
                    disabled={false}
                    onPress={() => nav.navigate("LogIn")}
                />
            </View>
        </>
    )
}

export default ProfileHome;