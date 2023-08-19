import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import styles from "../components/styling/style";
import React from "react";
import SocialHome from "../components/homeScreens/SocialHome";
import CollectionHome from "../components/homeScreens/CollectionHome";
import CardsHome from "../components/homeScreens/CardsHome";
import ProfileHome from "../components/homeScreens/ProfileHome";
import LogoButton from "../components/buttons/LogoButton";

type MainHomeProps = NativeStackScreenProps<RootStackParamList, "MainHome">;

const MainHome: React.FC<MainHomeProps> = (props) => {
  const [selected, setSelected] = React.useState("collectory");

  const fillScreen = (choice: string) => {
    switch (choice) {
      case "collectory":
        return <SocialHome />;
      case "collections":
        return <CollectionHome />;
      case "cards":
        return <CardsHome />;
      case "profile":
        return <ProfileHome />;
      default:
        return <SocialHome />;
    }
  };

  const onPress = (name: string) => {
    setSelected(name);
    // switch case to go in the different pages of the app
    switch (name) {
      case "collectory":
        setSelected("collectory");
        break;
      case "cards":
        setSelected("cards");
        break;
      case "collections":
        setSelected("collections");
        break;
      case "profile":
        setSelected("profile");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backBar}>
        <LogoButton
          name="collectory"
          selected={selected === "collectory"}
          onPress={() => onPress("collectory")}
        />
        <LogoButton
          name="cards"
          selected={selected === "cards"}
          onPress={() => onPress("cards")}
        />
        <LogoButton
          name="collections"
          selected={selected === "collections"}
          onPress={() => onPress("collections")}
        />
        <LogoButton
          name="profile"
          selected={selected === "profile"}
          onPress={() => onPress("profile")}
        />
      </View>
      <View style={styles.safeAreaViewContent}>{fillScreen(selected)}</View>
    </View>
  );
};

export default MainHome;
