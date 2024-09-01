import axios from "axios";
import { getAllCardInCollection, getCollectionByUserId, addNewCollection, addNewCard, getQuantityByCardId, getWishlistByUserId, removeCardFromCollection, findCardInCollection } from "./routesAPI";
import * as SecureStore from 'expo-secure-store';

const getAllCardsInCollection = async (collectionId: number) => {
    // console.log("collectionId: " + collectionId)
    return await axios.get(getAllCardInCollection + collectionId)
    .then(
        (res) => {
            //console.log("all the cards " + JSON.stringify(res.data.data))
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

const getCollectionByUser = (userId: number) => {
    console.log("userId: " + typeof(userId))
    console.log ("token", SecureStore.getItemAsync("accessToken"))
    let response: { id: number; userId: number; collectionName: string; licenseId: number; createdAt: string; updatedAt: string; }[] | undefined = []
    return axios.get(getCollectionByUserId + userId)
    .then(
        (res) => {
            console.log("all the collections: " + JSON.stringify(res.data))
            if(res.data.length === 0) {
                response = undefined
            }
            else {
                const collections: {id: number, userId: number, collectionName: string, licenseId: number, createdAt: string, updatedAt: string}[] | undefined = res.data
                response = collections
            }
            return response
        }
    )
    .catch(
        (err) => {
            console.log("error: ", err)
            response = undefined
            return response
            }
    )
}

const createNewCollection = async (userId: number, collectionName: string, licenseId: number) => {
    return await axios.post(addNewCollection, {userId: userId, collectionName: collectionName, licenseId: licenseId})
    .then(
        (res) => {
            // console.log("new collection: " + JSON.stringify(res.data))
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

const addCardInCollection = async (collectionId: number, cardId: string, quality: string, quantity: number) => {
    // console.log("collectionId: " + collectionId + " cardId: " + cardId + " quality: " + quality + " quantity: " + quantity)
    const chosenQuality = quality === "Excellent" ? "excellent" : quality === "Lightly Played" ? "lightlyPlayed" : "poor"
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

const findWishlistByUserId = async (userId: number) => {
    return await axios.get(getWishlistByUserId + userId)
    .then(
        (res) => {
            // console.log("all the collections: " + JSON.stringify(res.data))
            console.log(res)
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

const getQuantity = async (cardId : number) => {
    return await axios.get(getQuantityByCardId + cardId)
    .then(
        (res) => {
            // console.log("all the quantities: " + JSON.stringify(res.data))
            if(res.data.length === 0) {
                return undefined
            }
            else {
                const cardQuantity: {id: number, cardId: number, excellent: number, lightlyPlayed: number, poor: number, createdAt: string, updatedAt: string} = res.data
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

const removeCardInCollection = async (collectionId: number, cardId: string, quality: string) => {
    console.log("collectionId: " + collectionId + " cardId: " + cardId + " quality: " + quality)
    return await axios.delete(removeCardFromCollection, {data: {collectionId, cardId, quality}})
    .then(
        (res) => {
            return res
        }
    )
    .catch(
        (err) => {
            console.log(err)
            return undefined
            }
    )
}

const findCardExistInCollection = async (collectionId: number, cardId: string) => {
    return await axios.get(findCardInCollection, {params: {collectionId: collectionId, cardId: cardId}})
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

export {getAllCardsInCollection, getCollectionByUser, findWishlistByUserId, createNewCollection, addCardInCollection, getQuantity, removeCardInCollection, findCardExistInCollection};
