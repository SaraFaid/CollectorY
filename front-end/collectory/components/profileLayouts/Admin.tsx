import React, { useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "../styling/style";
import { getEveryUser } from "../../services/userAPI";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../styling/colors";


const Admin = () => {
    const [users, setUsers] = React.useState<any[]>([])

    useEffect(() => {
        getEveryUser().then((res) => {
            if(res !== undefined) setUsers(res)
        })
    }, [])

    const fillUsersList = () => {
        const usersList: JSX.Element[] = []
        users.forEach((user) => {
            let iconName = ""
            if (user.id % 2 === 0) iconName = "account-arrow-up"
            else iconName = "account-arrow-down"
            usersList.push(
                <View key={user.id} style={styles.userAdminView}>
                    <Text style={styles.userNameTextAdmin}>{user.username}</Text>
                    <Text style={styles.textAdmin}>{user.emailAddress}</Text>
                    <Text style={styles.textAdmin}>{user.collectory ? "CollectorY member" : "Not a CollectorY member"}</Text>
                    {user.id !== 1? 
                    <View style={{flexDirection: 'row', alignItems:'flex-end', alignSelf:'flex-end'}}>
                    <Icon style={{alignSelf: 'flex-end'}} name={iconName} size={40} color={colors.light} onPress={() => {}}/> 
                    <Icon name='account-remove' size={40} color={colors.light} onPress={() => {}}/>
                    </View>
                    : 
                    <></>}
                </View>
            )
        })
        return usersList
    }


    return (
            <SafeAreaView>
            <Text style={styles.titleContent}>Administrator Management</Text>
                {fillUsersList()}
            </SafeAreaView>
    );
}

export default Admin;
