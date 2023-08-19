import axios from "axios";
import { getCardsFromSet, getAllSets } from "./routesAPI";

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

export { getCardsFromSetID, getSets };
