// UI for the login in the application

import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import StyledButton from "../components/buttons/StyledButton";
import colors from "../components/styling/colors";
import styles from "../components/styling/style";
import { LogUserIn } from "../services/userAPI";

type LogInProps = {
  navigation: NavigationProp<any,any>
}

function LogIn({navigation}: LogInProps) 
{
  // variables useStates
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // variables error
  const [errorEmailFormat, setErrorEmailFormat] = useState(false);
  const [errorNotGoodInfos, setErrorNotGoodInfos] = useState(false);

  const checkInputsFilled = () => {
    if (email === "" || password === "") {
      return true;
    } else return false;
  };

  const onClickSLogIn = () => {
    setErrorEmailFormat(false);
    setErrorNotGoodInfos(false);
    if (
      email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) === null
    ) {
      setErrorEmailFormat(true);
    } else {
      LogUserIn(email, password).then((res) => {
        if (res) {
          setEmail("");
          setPassword("");
        navigation.navigate("MainHome", {user: res});
      } else {
        setErrorNotGoodInfos(true);
      } 
      })
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleContent}>Welcome back on CollectorY!</Text>
      <View style={styles.content}>
        <Text style={styles.textContent}>
          Please enter your email address and password to log to your account.
        </Text>
        <View style={styles.separator}>
          <TextInput
            style={styles.textInput}
            placeholder="Email address"
            autoComplete="email"
            inputMode="email"
            textContentType="emailAddress"
            defaultValue={email}
            onChangeText={(text) => setEmail(text)}
          />
          {
            errorEmailFormat ? (
                <Text style={styles.errorTextInput}>
                    Email address is not valid
                </Text>
                ) : (
                <></>
                )
          }
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            inputMode="text"
            textContentType="password"
            secureTextEntry={true}
            defaultValue={password}
            onChangeText={(text) => setPassword(text)}
          />
          {
            errorNotGoodInfos ? (
                <Text style={styles.errorTextInput}>
                    Email address or password is not correct
                </Text>
                ) : (
                <></>
                )
          }
          <StyledButton
            title="Log In"
            color={colors.secondary}
            disabled={checkInputsFilled()}
            onPress={onClickSLogIn}
          />
          <StyledButton
                    title="Sign Up"
                    color={colors.dark}
                    disabled={false}
                    onPress={() => navigation.navigate("SignUp")}
                />
        </View>
      </View>
    </View>
  );
}


export default LogIn;
