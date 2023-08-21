import axios from "axios";
import { isUserExisting, logInUser, registerUser } from "./routesAPI";
import * as SecureStore from 'expo-secure-store';

function checkUserExists(email: string) {
    return axios.get(isUserExisting + email)
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

function addUser(emailAddress: string, password: string, username: string, collectory: boolean) {
    return axios.post(registerUser, {emailAddress, password, username, collectory})
    .then(
        (res: any) => {
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



function LogUserIn(emailAddress: string, password: string) {
    return axios.post(logInUser,{emailAddress, password})
    .then((res) => res.data)
          .then(async (data) => {
            const { accessToken, refreshToken } = data;
      
            await SecureStore.setItemAsync('accessToken', accessToken);
            await SecureStore.setItemAsync('refreshToken', refreshToken);
            axios.defaults.headers["authorization"] = "Bearer " + accessToken;
            return true;
          })
          .catch((error) => {
            console.log(error.response.status);
            return false;
          });
}   

export { checkUserExists, addUser, LogUserIn };