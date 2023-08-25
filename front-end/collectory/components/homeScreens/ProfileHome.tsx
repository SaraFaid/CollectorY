import { View, Text } from "react-native";
import styles from "../styling/style";
import React, { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import StyledButton from "../buttons/StyledButton";
import colors from "../styling/colors";
import { LogUserOut } from "../../services/userAPI";
import LongButton from "../buttons/LongButton";
import Wishlist from "../profileLayouts/Wishlist";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FriendsList from "../profileLayouts/FriendsList";
import Settings from "../profileLayouts/Settings";
import Admin from "../profileLayouts/Admin";


type ProfileHomeProps = {
    user: JSON,
    nav: NavigationProp<any,any>
}

const ProfileHome = ({user, nav}: ProfileHomeProps) => {

    const userLogged = JSON.parse(JSON.stringify(user))
    const [selectedButton, setSelectedButton] = React.useState<string>("")



    const isAdministrator = () => {
        const rights: boolean[] = []
        userLogged.roles.forEach((role: any) => {
            if(role.roleName === "admin") rights.push(true)
            rights.push(false)
    })
        if(rights.includes(true)) return true
        else return false
    }

    const logUserOut = async () => {
        if(await LogUserOut()) nav.navigate("LogIn")
        else console.log("Error while logging out")
    }

    const onPress = (title: string) => {
        switch (title) {
            case "Wishlist":
                console.log(title)
                setSelectedButton(title)
                break
            case "Friends":
                console.log(title)
                setSelectedButton(title)
                break
            case "Settings":
                console.log(title)
                setSelectedButton(title)
                break
            case "Admin":
                setSelectedButton(title)
                console.log(title)
                break
            default:
                console.log("duh")
                break
    }
    }

    const switchViews = () => {
        switch (selectedButton) {
            case "Wishlist":
                return (<>
                <Icon name='keyboard-backspace' size={40} color={colors.dark} onPress={() => {
                    setSelectedButton("")
                }}/>
                <Wishlist/>
                </>)
                break;
            case "Friends":
                return (<>
                <Icon name='keyboard-backspace' size={40} color={colors.dark} onPress={() => {
                    setSelectedButton("")
                }}/>
                <FriendsList/>
                </>
                )
                break;
            case "Settings":
                return (<>
                <Icon name='keyboard-backspace' size={40} color={colors.dark} onPress={() => {
                    setSelectedButton("")
                }}/>
                <Settings/>
                </>)
            case "Admin":
                return (<>
                    <Icon name='keyboard-backspace' size={40} color={colors.dark} onPress={() => {
                        setSelectedButton("")
                    }}/>
                    <Admin/>
                    </>)
            default:
                return <>
                <Text style={styles.titleContent}>Welcome {userLogged.username}!</Text>
                <View style={styles.content}>
                    <LongButton title="My Wishlist" onPress={() => onPress("Wishlist")}/>
                    {
                        userLogged.collectory?
                        <LongButton title="My Friends" onPress={() =>onPress("Friends")}/> 
                        : <></>
                    }
                    <LongButton title="Settings" onPress={() => onPress("Settings")}/>
                    {
                        isAdministrator()? 
                        <LongButton title="Administrator Management" onPress={() => onPress("Admin")}/>
                        : <></>
                    }
                    <LongButton title="Log Out" onPress={() => logUserOut()}/>
                </View>
            </>
    }
    }

    return (switchViews())
}

export default ProfileHome;