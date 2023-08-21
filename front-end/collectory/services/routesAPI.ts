export const baseUrl = 'http://192.168.68.110:5000/api'

// Users
export const isUserExisting = `${baseUrl}/users/`
export const registerUser = `${baseUrl}/users/add`
export const logInUser = `${baseUrl}/users/login`

// Pokemon
export const getCardsFromSet = `${baseUrl}/pokemon/cards/`
export const getAllSets = `${baseUrl}/pokemon/sets` 
export const getCardById = `${baseUrl}/pokemon/card/`
