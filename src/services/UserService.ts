import Constants from "../Constants";
import HttpHelper from "../helpers/HttpHelper";
import UserBean from "../models/UserBean";

class UserService {
  static async getUser(name: string) {
    const response = await HttpHelper.get(
      `${Constants.BASE_URL}/user/${name}.json`
    );
    if (response) {
      return response as UserBean;
    }
    return null;
  }
}

export default UserService;
