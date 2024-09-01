import axios from "axios";
import {
  isUserExisting,
  logInUser,
  registerUser,
  getUserById,
  getAllUsers,
} from "./routesAPI";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

function checkUserExists(email: string) {
  return axios
    .get(isUserExisting + email)
    .then((res: any) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
}

function getUserbyID(id: number) {
  return axios
    .get(getUserById + id.toString())
    .then((res) => {
      const data: {
        id: number;
        emailAddress: string;
        passwordDigest: string;
        username: string;
        collectory: boolean;
        createdAt: string;
        updatedAt: string;
      } = res.data;
      return data;
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
}

function addUser(
  emailAddress: string,
  password: string,
  username: string,
  collectory: boolean
) {
  return axios
    .post(registerUser, { emailAddress, password, username, collectory })
    .then((res: any) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
}

function LogUserIn(emailAddress: string, password: string) {
  return axios
    .post(logInUser, { emailAddress, password })
    .then((res) => res.data)
    .then(async (data) => {
      const { user, accessToken, refreshToken } = data;

      await SecureStore.setItemAsync("user", JSON.stringify(user));
      await SecureStore.setItemAsync("accessToken", accessToken);
      await SecureStore.setItemAsync("refreshToken", refreshToken);
      axios.defaults.headers["authorization"] = "Bearer " + accessToken;
      return user;
    })
    .catch((error) => {
      console.log(error.response.status);
      return null;
    });
}

function LogUserOut() {
  return SecureStore.deleteItemAsync("accessToken")
    .then(() => SecureStore.deleteItemAsync("refreshToken"))
    .then(() => SecureStore.deleteItemAsync("user"))
    .then(() => {
      axios.defaults.headers["authorization"] = "";
      return true;
    })
    .catch((error) => {
      console.log(error.response.status);
      return false;
    });
}

async function getUserFromToken() {
  const token = await SecureStore.getItemAsync("accessToken");
  if (token !== null) {
    const user: {
      id: number;
      emailAddress: string;
      passwordDigest: string;
      username: string;
      collectory: boolean;
      createdAt: string;
      updatedAt: string;
    } = jwtDecode(token);
    //console.log(user)
    return user;
  } else return undefined;
}

function getEveryUser() {
  return axios
    .get(getAllUsers)
    .then((res) => {
      // console.log(res.data)
      const data: {
        id: number;
        emailAddress: string;
        passwordDigest: string;
        username: string;
        collectory: boolean;
        createdAt: string;
        updatedAt: string;
      }[] = res.data;
      return data;
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
}

const isTokenExpired = (token: string | null) => {
  if (!token) return true;
  try {
    const decodedToken: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

export {
  checkUserExists,
  getUserbyID,
  addUser,
  LogUserIn,
  LogUserOut,
  getUserFromToken,
  getEveryUser,
  isTokenExpired,
};
