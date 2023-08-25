import axios from "axios";
import { getAllCardInCollection, getCollectionByUserId } from "./routesAPI";


const getAllCardsInCollection = async (collectionId: string) => {
    return await axios.get(getAllCardInCollection + collectionId)
    .then(
        (res) => {
            console.log("all the cards" + JSON.stringify(res.data.data))
            return res.data.data
        }
    )
    .catch(
        (err) => {
            console.log(err)
            return []
            }
    )
}

const getCollectionByUser = async (userId: string) => {
    return await axios.get(getCollectionByUserId + userId)
    .then(
        (res) => {
            console.log("all the collections" + JSON.stringify(res.data.data))
            return res.data.data
        }
    )
    .catch(
        (err) => {
            console.log(err)
            return []
            }
    )
}

export {getAllCardsInCollection, getCollectionByUser}
