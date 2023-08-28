import axios from "axios";
import { getPostsForLoggedUser } from "./routesAPI";
import { getUserFromToken } from "./userAPI";

export async function getPosts() {
    const user: {
        "id": number,
        "emailAddress": string,
        "passwordDigest": string,
        "username": string,
        "collectory": boolean,
        "createdAt": string,
        "updatedAt": string
    } |undefined = await getUserFromToken()
    if(user !== undefined) {
        let posts: {"cardId": string, "content": string, "createdAt": string, "id": number, "updatedAt": string, "userId": number}[] = []
        await axios.get(getPostsForLoggedUser + user.id)
        .then((res) => posts = res.data)
        .catch((err) => console.log(err))
        //console.log(posts)
        return posts
    }
    else {
        return null
    }
}
