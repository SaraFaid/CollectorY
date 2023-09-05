import axios from 'axios';
import { addNewCard } from './routesAPI';

const addCardInCollection = async (collectionId: number, cardId: string, quantity: number) => {
    console.log("collectionId: " + collectionId + " cardId: " + cardId + " quantity: " + quantity)
    return await axios.post(addNewCard, {collectionId: collectionId, cardId: cardId, quantity: quantity})
    .then(
        (res) => {
            console.log("new card in collection: " + JSON.stringify(res.data))
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

export {addCardInCollection};