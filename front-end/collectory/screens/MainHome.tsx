import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import LogoButton from "../components/buttons/LogoButton";
import CardsHome from "../components/homeScreens/CardsHome";
import CollectionHome from "../components/homeScreens/CollectionHome";
import ProfileHome from "../components/homeScreens/ProfileHome";
import SocialHome from "../components/homeScreens/SocialHome";
import styles from "../components/styling/style";

type MainHomeProps = {
  navigation: NavigationProp<any, any>;
  route: NavigationProp<any, any>;
};

function MainHome({ navigation, route }: MainHomeProps) {
  const [selected, setSelected] = React.useState("cards");

  const userLogged = route.params?.user;
  //console.log(userLogged);

  const fillScreen = (
    choice: string,
    user: JSON,
    navigation: NavigationProp<any, any>
  ) => {
    if (userLogged.collectory) {
      switch (choice) {
        case "collectory":
          return <SocialHome userLogged={user} />;
        case "collections":
          return <CollectionHome />;
        case "cards":
          return <CardsHome />;
        case "profile":
          return <ProfileHome user={user} nav={navigation} />;
        default:
          return <SocialHome userLogged={user} />;
      }
    } else {
      switch (choice) {
        case "collections":
          return <CollectionHome />;
        case "cards":
          return <CardsHome />;
        case "profile":
          return <ProfileHome user={user} nav={navigation} />;
        default:
          return <CardsHome />;
      }
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
        {userLogged.collectory?

<LogoButton
name="collectory"
selected={selected === "collectory"}
onPress={() => onPress("collectory")}
/>
: <></>}
      </View>
      <View style={styles.safeAreaViewContent}>
        {fillScreen(selected, userLogged, navigation)}
      </View>
    </View>
  );
}

export default MainHome;
