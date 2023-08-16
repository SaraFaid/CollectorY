import data from "../mock/mockedUsers.json";


const findUser = (email: string, password: string) => {
    let result = null
    result = data.find((user) => {
      if (user.emailAddress === email && user.passwordDigest === password) {
        return user;
      }
      else return null;
    });
    return result;
  };

  export default findUser;