import { View, Text, ImageBackground, ScrollView } from "react-native";
import styles from "../styling/style";
import React, { useEffect } from "react";
import { getCardByID } from "../../services/pokemonAPI";
import { getPosts } from "../../services/postAPI";
import { getUserbyID } from "../../services/userAPI";
import PostCard from "../others/PostCard";

type SocialHomeProps = {
  userLogged: JSON;
};

const SocialHome = ({ userLogged }: SocialHomeProps) => {
  const [posts, setPosts] = React.useState<{"cardId": string, "content": string, "createdAt": string, "id": number, "updatedAt": string, "userId": number}[]>([]);
  const [feed, setFeed] = React.useState<JSX.Element[]>([]);

  const ObtainPosts = async () => {
    let dataPosts: any[] = [];
    await getPosts()
      .then((res) => {
        if (res !== null) dataPosts = res;
      })
      .catch((err) => console.log(err));
    return dataPosts;
  };

  useEffect(() => {
    ObtainPosts()
      .then((res) => {
        setPosts(res);
        fillFeed();
      })
      .catch((err) => console.log(err));
  }, []);

  const fillFeed = () => {
    let index = 0;
    posts.map((post) => {
      index++;
      getCardByID(post.cardId)
      .then((res) => {
        console.log(res.name)
        const path = { uri: res.images.large };
        const cardName = res.name;
        getUserbyID(post.userId)
        .then((res) => {
          if (res !== undefined) {
            feed.push(
              <PostCard
                author={res.username}
                cardName={cardName}
                content={post.content}
                index={index}
                path={path}

              />
            );
          }
        });
      });
    });
    return feed;
  };

  return (
    <ScrollView>
      <Text style={styles.titleContent}>News from your friends!</Text>
      <View style={styles.largeContent}>
        {posts.length === 0 ? (
          <Text style={styles.titleContent}>Loading . . .</Text>
        ) : (
            feed
        )}
      </View>
    </ScrollView>
  );
};

export default SocialHome;
