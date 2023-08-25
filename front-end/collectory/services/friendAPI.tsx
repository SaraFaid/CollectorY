import axios from "axios";
import { getAllFriends } from "./routesAPI";
import { getUserFromToken, getUserbyID } from "./userAPI";

function getFriends() {
    let userId: string | number | undefined = undefined
    const result = getUserFromToken()
    .then((user) => {
        if (user !== undefined) {
            userId = user.id
            return axios.get(getAllFriends + userId)
            .then(
                (res: any) => {
                    //console.log(res.data)
                    const friends: {
                        id: number;
                        emailAddress: string;
                        passwordDigest: string;
                        username: string;
                        collectory: boolean;
                        createdAt: string;
                        updatedAt: string;
                    }[] = []
                    res.data.forEach((friend: any) => {
                        if (friend.userId1 === userId) {
                            getUserbyID(friend.userId2)
                            .then((user) => {
                                if (user !== undefined) {
                                    // console.log("userID1: " + JSON.stringify(user))
                                    friends.push(user)
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                            }
                            )
                        }
                        else {
                            getUserbyID(friend.userId1)
                            .then((user) => {
                                if (user !== undefined) {
                                    // console.log("userID2: " + JSON.stringify(user))
                                    friends.push(user)
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        }
                    })
                    return friends
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                    });
        }
    })
    .catch((err) => {
        console.log(err)
    })
    return result
}

export { getFriends }