import { Dimensions } from "react-native";
import {
  Button,
  PaperProvider,
  Surface,
  Text,
  TextInput,
} from "react-native-paper";
import AppTopBar from "../components/AppTopBar";
import React from "react";

export default function LogIn() {
    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;
  
    const [email, setEmail] = React.useState("");
    const [pwd, setPwd] = React.useState("");
  
    return (
      <PaperProvider>
        <Surface
          style={{
            alignItems: "center",
            height: height,
            width: width,
            backgroundColor: "#EEEEFF",
          }}
        >
          <AppTopBar needBack={false} />
          <Surface
            style={{ alignItems: "center", height: height, width: width }}
            elevation={0}
          >
            <Text
              variant="headlineMedium"
              style={{ paddingVertical: 10, color: '#28587B' }}
            >
              Log In
            </Text>
            <Surface
              style={{
                paddingVertical: 20,
                paddingHorizontal: 50,
                backgroundColor: "#9FB4C7",
                borderRadius: 25
              }}
              elevation={0}
            >
              <TextInput
                label="Email Address"
                value={email}
                onChangeText={(txt) => setEmail(txt)}
                style={{
                  width: 300,
                  marginVertical: 5,
                  backgroundColor: "#EEEEFF",
                }}
                mode="flat"
              />
              <TextInput
                label="Password"
                value={pwd}
                onChangeText={(txt) => setPwd(txt)}
                style={{
                  width: 300,
                  marginVertical: 5,
                  backgroundColor: "#EEEEFF",
                }}
                mode="flat"
              />
              <Button
                style={{ minWidth: 100, alignSelf: "center", marginVertical: 20, borderRadius: 5, paddingVertical: 5}}
                buttonColor="#28587B"
                textColor="white"
                labelStyle={{fontWeight: '700'}}
              >
                LOG IN
              </Button>
            </Surface>
          </Surface>
        </Surface>
      </PaperProvider>
    );
  }
  
