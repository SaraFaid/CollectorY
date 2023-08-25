import axios from "axios";
import { getCardsFromSet, getAllSets, getCardById } from "./routesAPI";

function getCardsFromSetID(setId: string) {
  return axios.get(getCardsFromSet + setId)
  .then(
    (res: any) => {
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

function getSets() {
  return axios.get(getAllSets)
  .then(
    (res: any) => {
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

function getCardByID(id: string) {
  return axios.get(getCardById + id)
  .then(
    (res: any) => {
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

export { getCardsFromSetID, getSets, getCardByID };
