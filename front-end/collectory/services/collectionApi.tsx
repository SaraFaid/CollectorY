import axios from "axios";
import { getAllCardInCollection, getCollectionByUserId, addNewCollection, addNewCard, getQuantityByCardId } from "./routesAPI";


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

const addCardInCollection = async (collectionId: number, cardId: number, quality: string, quantity: number) => {
    console.log("collectionId: " + collectionId + " cardId: " + cardId + " quality: " + quality + " quantity: " + quantity)
    const chosenQuality = quality === "Mint" ? "mint" : quality === "Near Mint" ? "nearMint" : quality === "Excellent" ? "excellent" : quality === "Lightly Played" ? "lightlyPlayed" : quality === "Played" ? "played" : "poor"
    return await axios.post(addNewCard, {collectionId: collectionId, cardId: cardId, quality: chosenQuality, quantity: quantity})
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

const getQuantity = async (cardId : number) => {
    return await axios.get(getQuantityByCardId + cardId)
    .then(
        (res) => {
            console.log("all the quantities: " + JSON.stringify(res.data))
            if(res.data.length === 0) {
                return undefined
            }
            else {
                const cardQuantity: {id: number, cardId: number, mint: number, nearMint: number, excellent: number, lightlyPlayed: number, played: number, poor: number, createdAt: string, updatedAt: string}[] = res.data
                return cardQuantity
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

export {getAllCardsInCollection, getCollectionByUser, createNewCollection, addCardInCollection, getQuantity}
