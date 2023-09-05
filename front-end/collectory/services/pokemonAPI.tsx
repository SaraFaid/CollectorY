import axios from "axios";
import { getCardsFromSet, getAllSets, getCardById, getListOfCards } from "./routesAPI";
import qs from "qs";

function getCardsFromSetID(setId: string) {
  return axios.get(getCardsFromSet + setId)
  .then(
    (res: any) => {
      //console.log("ici 2",res.data)
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

function getCardsList(idList: string[]) {
  return axios.get(getListOfCards, {
    params:{
      list: idList
    },
    paramsSerializer : params => {
      return qs.stringify(params, {arrayFormat: 'repeat'});
    }
  })
  .then(
    (res: any) => {
      //console.log("ici",res.data)  
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

export { getCardsFromSetID, getSets, getCardByID, getCardsList };
