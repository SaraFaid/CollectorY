import { View, Text, ImageBackground } from "react-native";
import styles from "../styling/style";
import React from "react";
import dataPosts from "../../mock/mockedPosts.json"
import dataUsers from "../../mock/mockedUsers.json"


const SocialHome = () => {

    const fillFeed = () => {
        const result = dataPosts.map((post) => {
            let url = require("../../mock/images/pikachu.jpg")

            if(post.cardId === "swsh4-1") {
                url = require("../../mock/images/pikachu.jpg")
            }
            else if(post.cardId === "swsh4-2") {
                url = require("../../mock/images/venusaur-1.jpg")
            }
            else if(post.cardId === "swsh4-3") {
                url = require("../../mock/images/venusaur-2.jpg")
            }

            const author = dataUsers.filter((user) => user.id === post.userId)[0].username

            return (
                <View style={styles.post} key={post.id}>
                    <Text style={styles.postAuthor}>{author}</Text>
                    <Text style={styles.postContent}>{post.content}</Text>
                    <ImageBackground source={url} style={styles.postImage} resizeMode="cover">
                        <Text style={styles.postTextImage}>{post.cardId}</Text>
                    </ImageBackground>
                </View>
            )
        }
        )
        return result;
    }

    return (
        <>
            <Text style={styles.titleContent}>Your friends' feed HERE</Text>
            <View style={styles.content}>
                {fillFeed()}
            </View>
        </>
    )
}

export default SocialHome;