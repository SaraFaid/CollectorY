// UI for the sign up in the application

import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import styles from "../components/styling/style";
import colors from "../components/styling/colors";
import StyledButton from "../components/buttons/StyledButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type SignUpProps = NativeStackScreenProps<RootStackParamList, "SignUp">;

const SignUp: React.FC<SignUpProps> = (props) => {
  // variables useStates
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [collectory, setCollectory] = useState(false);
  const [terms, setTerms] = useState(false);

  // variables error
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorLengthPassword, setErrorLengthPassword] = useState(false);
  const [errorLengthConfirmPassword, setErrorLengthConfirmPassword] =
    useState(false);

  const checkInputsFilled = () => {
    if (email === "" || password === "" || confirmPassword === "" || username === "" || !terms) {
      return true;
    } else return false;
  };

  const onClickSignUp = () => {
    setErrorPassword(false);
    setErrorEmail(false);

    if (
      email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) === null
    ) {
      setErrorEmail(true);
    } else {
      if (password === confirmPassword) {
        Alert.alert(
          "Signed Up",
          `You have successfully created your account, ${username}.`
        );
        props.navigation.navigate("LogIn");
      } else {
        setErrorPassword(true);
      }
    }
  };


        // not falsy from the start like that
      if (password.length > 0 && password.length < 8 && !errorLengthPassword) {
          setErrorLengthPassword(true);
        } else if (password.length >= 8 && errorLengthPassword) {
            setErrorLengthPassword(false);
        }

        // not falsy from the start like that
        if (confirmPassword.length > 0 && confirmPassword.length < 8 && !errorLengthConfirmPassword) {
            setErrorLengthConfirmPassword(true);
        } else if (confirmPassword.length >= 8 && errorLengthConfirmPassword) {
            setErrorLengthConfirmPassword(false);
        }

  return (
    <View style={styles.container}>
      <Text style={styles.titleContent}>Welcome on CollectorY!</Text>
      <View style={styles.content}>
        <Text style={styles.textContent}>
          Please enter your email address and password to create an account.
        </Text>
        <View style={styles.separator}>
        <TextInput
            style={styles.textInput}
            placeholder="Username"
            inputMode="text"
            textContentType="username"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email address"
            autoComplete="email"
            inputMode="email"
            textContentType="emailAddress"
            onChangeText={(text) => setEmail(text)}
          />
          {errorEmail ? (
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
            onChangeText={(text) => setPassword(text)}
          />
          {errorLengthPassword ? (
            <Text style={styles.errorTextInput}>
              Password must be at least 8 characters
            </Text>
          ) : (
            <></>
          )}
          <TextInput
            style={styles.textInput}
            placeholder="Confirm password"
            inputMode="text"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          {errorLengthConfirmPassword ? (
            <Text style={styles.errorTextInput}>
              Password must be at least 8 characters
            </Text>
          ) : (
            <></>
          )}
          {errorPassword ? (
            <Text style={styles.errorTextInput}>Passwords do not match</Text>
          ) : (
            <></>
          )}

            <View style={styles.viewRow}>
              <BouncyCheckbox style={{alignSelf: 'center'}} size={25} fillColor={colors.secondary} innerIconStyle={{borderWidth: 4}} disableText onPress={() => {setCollectory(!collectory)}}/>
              <Text style={styles.textContent}>Want to become a member of the CollectorY community?</Text>
            </View>
            <View style={styles.viewRow}>

              <BouncyCheckbox style={{alignSelf: 'center'}} size={25} fillColor={colors.dark} innerIconStyle={{borderWidth: 4}} disableText onPress={() => {setTerms(!terms)}}/>
              <Text style={styles.smallTextContent}>
              By clicking on Sign Up, you agree to our Terms of Service and Privacy Policy.
              </Text>
            </View>
          <StyledButton
            title="Sign Up"
            color={colors.secondary}
            disabled={checkInputsFilled()}
            onPress={onClickSignUp}
            />
        </View>
      </View>
    </View>
  );
}

export default SignUp;