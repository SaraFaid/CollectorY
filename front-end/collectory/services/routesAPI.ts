export const baseUrl = 'http://192.168.68.121:5000/api'

// Users
export const isUserExisting = `${baseUrl}/users/`
export const registerUser = `${baseUrl}/users/add`
export const logInUser = `${baseUrl}/users/login`
export const getUserById = `${baseUrl}/users/id/`
export const getAllUsers = `${baseUrl}/users/all`

// Pokemon
export const getCardsFromSet = `${baseUrl}/pokemon/cards/`
export const getAllSets = `${baseUrl}/pokemon/sets` 
export const getCardById = `${baseUrl}/pokemon/card/`
export const getListOfCards = `${baseUrl}/pokemon/cardList`

// Collections
export const getCollectionByUserId = `${baseUrl}/collections/users/`
export const getAllCardInCollection = `${baseUrl}/cards/collection/`
export const addNewCollection = `${baseUrl}/collections/create`
export const getQuantityByCardId = `${baseUrl}/quantity/`

// Cards
export const addNewCard = `${baseUrl}/cards/add`
// export const updateCard = `${baseUrl}/cards/update`

// Posts
export const getPostsForLoggedUser = `${baseUrl}/posts/`

// Friends
export const getAllFriends = `${baseUrl}/friends/`