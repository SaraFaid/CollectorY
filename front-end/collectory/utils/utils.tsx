import { checkUserExists } from "../services/userAPI";


const findUser = async (email: string, password: string) => {
  await checkUserExists(email)
  .then(
    (res: any) => {
      if (res.length === 0) {
        return false
      }
      else {
        if (res[0].passwordDigest === password) {
          return true
        }
        else {
          return false
        }
      }
    }
  )
  .catch(
    (err) => {
      console.log(err)
      return null
      }
  )
  };

  export default findUser;