import axios from "axios";
import { getAllCardInCollection, getCollectionByUserId, addNewCollection, addCardToCollection } from "./routesAPI";


const getAllCardsInCollection = async (collectionId: number) => {
    console.log("collectionId: " + collectionId)
    return await axios.get(getAllCardInCollection + collectionId)
    .then(
        (res) => {
            console.log("all the cards" + JSON.stringify(res.data.data))
            return res.data
        }
    )
    .catch(
        (err) => {
            console.log(err)
            return []
            }
    )
}

const getCollectionByUser = async (userId: number) => {
    return await axios.get(getCollectionByUserId + userId)
    .then(
        (res) => {
            console.log("all the collections: " + JSON.stringify(res.data))
            if(res.data.length === 0) {
                return undefined
            }
            else {
                const collections: {id: number, userId: number, collectionName: string, licenseId: number, createdAt: string, updatedAt: string}[] = res.data
                return collections
            }
        }
    )
    .catch(
        (err) => {
            console.log(err)
            return undefined
            }
    )
}

const createNewCollection = async (userId: number, collectionName: string, licenseId: number) => {
    return await axios.post(addNewCollection, {userId: userId, collectionName: collectionName, licenseId: licenseId})
    .then(
        (res) => {
            console.log("new collection: " + JSON.stringify(res.data))
            return res.data
        }
    )
    .catch(
        (err) => {
            console.log(err)
            return undefined
            }
    )
}

const addCardInCollection = async (collectionId: number, cardId: number) => {
    return await axios.post(addCardToCollection, {collectionId: collectionId, cardId: cardId})
    .then(
        (res) => {
            return res.data
        }
    )
    .catch(
        (err) => {
            console.log(err)
            return undefined
            }
    )
}

export {getAllCardsInCollection, getCollectionByUser, createNewCollection, addCardInCollection}
