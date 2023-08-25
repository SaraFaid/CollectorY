import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../styling/style";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from "../styling/colors";
import StyledButton from "../buttons/StyledButton";


const Settings = () => {
    const [collectory, setCollectory] = React.useState<boolean>(false)
    const [password, setPassword] = React.useState<string>("")
    const [errorLengthPassword, setErrorLengthPassword] = React.useState<boolean>(false)
    const [username, setUsername] = React.useState<string>("")
    
    return (
        <View style={{alignItems: 'center'}}>
        <Text style={styles.titleContent}>Settings</Text>


        <TextInput
            style={styles.textInput}
            placeholder="Change Password"
            inputMode="text"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            />
              <StyledButton title="Change Password" onPress={() => { } } color={colors.dark} disabled={false}/>

        <TextInput
            style={styles.textInput}
            placeholder="Change Username"
            inputMode="text"
            secureTextEntry={true}
            onChangeText={(text) => setUsername(text)}
            />
            <StyledButton title="Change Username" onPress={() => { } } color={colors.dark} disabled={false}/>
            <View style={styles.viewRow}>
              <BouncyCheckbox style={{marginLeft: 35}}  size={25} fillColor={colors.secondary} innerIconStyle={{borderWidth: 4}} disableText onPress={() => {setCollectory(!collectory)}}/>
              <Text style={styles.textContent}>Member of the CollectorY social network</Text>
              </View>
              <StyledButton title="Delete Account" onPress={() => { } } color={colors.error} disabled={false}/>
        </View>
    );
    }

export default Settings;