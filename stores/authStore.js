import { decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;
  username = "bla bla bla";

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      this.user = null;
    }
  };

  signup = async (userData, navigation) => {
    try {
      await instance.post("register/", userData);
      this.login(userData, navigation);
    } catch (err) {
      console.error(err);
      console.log("something went wrong signing in");
    }
  };

  login = async (userData, navigation) => {
    try {
      console.log("USER", userData);
      const res = await instance.post("login/", userData);
      const user = res.data;
      await this.setUser(user.access);
      this.username = userData.username;
      console.log("USERName", this.username);
      navigation.navigate("ListScreen");
    } catch (err) {
      console.error(err);
      console.log("something went wrong logging in");
    }
  };

  logout = () => {
    this.setUser();
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
  username: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
