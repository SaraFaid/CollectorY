// UI for the login in the application

import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import styles from "../components/style";
import colors from "../components/colors";
import StyledButton from "../components/StyledButton";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import findUser from "../utils/utils";

type LogInProps = NativeStackScreenProps<RootStackParamList, "LogIn">;

const LogIn: React.FC<LogInProps> = (props) => {
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
      const request = findUser(email, password);
        if (request !== undefined) {
          const userfound = request;
          props.navigation.navigate("SocialHome");
          
        } else {
            setErrorNotGoodInfos(true);
          }
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
            color={colors.dark}
            disabled={checkInputsFilled()}
            onPress={onClickSLogIn}
          />
        </View>
      </View>
    </View>
  );
}

export default LogIn;
