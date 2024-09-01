import React, { useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import { getFriends } from "../../services/friendAPI";
import colors from "../styling/colors";
import styles from "../styling/style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//TODO: add and remote friends list buttons

const FriendsList = () => {
  const [friends, setFriends] = React.useState<{
    id: number;
    emailAddress: string;
    passwordDigest: string;
    username: string;
    collectory: boolean;
    createdAt: string;
    updatedAt: string;
}[]>([]);
  const selectedFriend = React.useState<any>({});
  const [research, setResearch] = React.useState<string>("");

 useEffect(() => {
    getFriends()
      .then((friendsList) => {
        if (friendsList !== undefined) setFriends(friendsList);
      })
      .catch((err) => {
        console.log(err);
      });
    }, [friends]);

  const fillFriendsList = () => {
    const elements: JSX.Element[] = [];

    friends.map((friend) => {
                elements.push(<View style={styles.friend}><Text style={{color: colors.dark}} key={friend.id}>Beosan</Text> <Icon name='account-remove' size={40} color={colors.dark} onPress={() => {}}/></View>);
    });
    return (elements);
    };

  return (
    <View>
        <TextInput
          style={styles.researchInput}
          placeholder="Friend's Username"
          inputMode="text"
          textContentType="name"
          onChangeText={() =>{}}
        />
        {
    friends.length === 0? 
        <Text style={styles.textContent}>No friends found</Text>
        : fillFriendsList()
        }
      </View>
  );
};

export default FriendsList;
