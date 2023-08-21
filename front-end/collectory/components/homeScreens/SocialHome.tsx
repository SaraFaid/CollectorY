import { View, Text, ImageBackground, ScrollView } from "react-native";
import styles from "../styling/style";
import React from "react";
import dataPosts from "../../mock/mockedPosts.json"
import dataUsers from "../../mock/mockedUsers.json"
import { getCardByID } from "../../services/pokemonAPI";


const SocialHome = () => {

    const [posts, setPosts] = React.useState<{author: string, content: string, cardId: string, cardName: string, cardImage: string}[]>([])

    const getPosts = () => {
        const result = dataPosts.map(async (mockPost) => {
            const author = dataUsers.filter((user) => user.id === mockPost.userId)[0].username
            await getCardByID(mockPost.cardId)
            .then((card) =>
                posts.push({author: author, content: mockPost.content, cardId: card.id, cardName: card.name, cardImage: card.images.small})
            )
        }
        )
        console.log(posts)
        return result;
    }    
    
    const fillFeed = () => {
        let index = 0;
        if (posts.length === 0) { getPosts() }
        else {
            const result = posts.map((post) => {
                index ++;
                return (
                    
                    <View style={styles.post} key={index}>
                    <Text style={styles.postAuthor}>{post.author}</Text>
                    <Text style={styles.postContent}>{post.content}</Text>
                    <ImageBackground source={post.cardImage === ""? require("../../mock/images/venusaur-1.jpg") : {uri: post.cardImage}} style={styles.postImage} resizeMode="cover">
                        <Text style={styles.postTextImage}>{post.cardName}</Text>
                    </ImageBackground>
                </View>
            )
        })
        return result;
    }
    }

    return (
        <ScrollView>
            <Text style={styles.titleContent}>Your friends' feed HERE</Text>
            <View style={styles.largeContent}>
                {posts.length === 0? <Text style={styles.titleContent}>Loading . . .</Text> : fillFeed()}
            </View>
        </ScrollView>
    )
}

export default SocialHome;