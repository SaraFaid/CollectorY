import React from "react";
import { View, Button } from "react-native";
import LogoButton from "./LogoButton";
import styles from "./style";

type BackBarProps = {
  selected: string;
  navigation: any;
};

export default function BackBar({ selected, navigation }: BackBarProps) {
  const [selectedButton, setSelectedButton] = React.useState("");

  const touchButton = (name: string) => {
    setSelectedButton(name);
    // switch case to go in the different pages of the app
    switch (name) {
      case "collectory":
        selected = "collectory";
        setSelectedButton("collectory");
        navigation.navigate("SocialHome");
        break;
      case "cards":
        selected = "cards";
        setSelectedButton("cards");
        navigation.navigate("CardsHome");
        break;
      case "collections":
        selected = "collections";
        setSelectedButton("collections");
        navigation.navigate("CollectionHome");
        break;
      case "profile":
        selected = "profile";
        setSelectedButton("profile");
        navigation.navigate("ProfileHome");
        break;
      default:
        break;
    }
  };

  if (selectedButton === "" && selected !== "" && selectedButton !== selected) {
    setSelectedButton(selected);
  }

  return (
    <View style={styles.backBar}>
      <LogoButton
        name="collectory"
        selected={selectedButton === "collectory"}
        onPress={() => touchButton("collectory")}
      />
      <LogoButton
        name="cards"
        selected={selectedButton === "cards"}
        onPress={() => touchButton("cards")}
      />
      <LogoButton
        name="collections"
        selected={selectedButton === "collections"}
        onPress={() => touchButton("collections")}
      />
      <LogoButton
        name="profile"
        selected={selectedButton === "profile"}
        onPress={() => touchButton("profile")}
      />
    </View>
  );
}
