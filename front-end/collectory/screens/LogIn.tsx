// UI for the login in the application

import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import StyledButton from "../components/buttons/StyledButton";
import colors from "../components/styling/colors";
import styles from "../components/styling/style";
import { LogUserIn, LogUserOut } from "../services/userAPI";
// import * as SecureStore from "expo-secure-store";
// import { isTokenExpired } from "../services/userAPI";

type LogInProps = {
  navigation: NavigationProp<any, any>;
};

function LogIn({ navigation }: LogInProps) {
  // variables useStates
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // variables error
  const [errorEmailFormat, setErrorEmailFormat] = useState(false);
  const [errorNotGoodInfos, setErrorNotGoodInfos] = useState(false);

  // functions
  // useEffect(() => {
  //   SecureStore.getItemAsync("accessToken").then((res) => {
  //     if (res) {
  //       const token = SecureStore.getItemAsync("accessToken")
  //         .then((res2) => {
  //           if (isTokenExpired(res2)) {
  //             LogUserOut();
  //           } else {
  //             const user = SecureStore.getItemAsync("user").then((user) => {
  //               if (user) {
  //                 console.log("user: ", JSON.parse(user));
  //                 navigation.navigate("MainHome", { user: JSON.parse(user) });
  //               }
  //             });
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   });
  // }, []);

  const checkInputsFilled = () => {
    if (email === "" || password === "") {
      return true;
    } else return false;
  };

  const onClickLogIn = () => {
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
          console.log("res: ", res);
          navigation.navigate("MainHome", { user: res });
        } else {
          setErrorNotGoodInfos(true);
        }
      });
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
          {errorEmailFormat ? (
            <Text style={styles.errorTextInput}>
              Email address is not valid
            </Text>
          ) : (
            <></>
          )}
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            inputMode="text"
            textContentType="password"
            secureTextEntry={true}
            defaultValue={password}
            onChangeText={(text) => setPassword(text)}
          />
          {errorNotGoodInfos ? (
            <Text style={styles.errorTextInput}>
              Email address or password is not correct
            </Text>
          ) : (
            <></>
          )}
          <StyledButton
            title="Log In"
            color={colors.secondary}
            disabled={checkInputsFilled()}
            onPress={onClickLogIn}
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
