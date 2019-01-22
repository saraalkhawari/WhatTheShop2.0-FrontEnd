import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class Store {
  constructor() {
    this.user = null;
  }

  setAuthToken(token) {
    if (token) {
      // Apply to every request
      axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }

  setCurrentUser(decoded) {
    if (token) {
      // Decode token to get user data
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      this.user = null;
    }
  }

  logoutUser() {
    AsyncStorage.removeItem("jwtToken").then(
      () => {
        this.setCurrentUser();
        this.setAuthToken();
      },
      () => {
        console.log("something went wrong with logging out");
      }
    );
  }

  loginUser(username, password) {
    const userData = {
      username: username,
      password: password
    };
    instance
      .post("/api/login/", userData)
      .then(res => res.data)
      .then(user => {
        const { token } = user;
        // Save token to localStorage
        AsyncStorage.setItem("jwtToken", token).then(
          () => {
            // Set token to Auth header
            this.setAuthToken(token);

            // Set current user
            this.setCurrentUser(token);
          },
          () => console.log("something went wrong with setting jwt token")
        );
      })
      .catch(err => console.log("something went wrong logging in"));
  }

  checkForToken = () => {
    AsyncStorage.getItem("jwtToken")
      .then(token => {
        if (token) {
          const currentTime = Date.now() / 1000;

          // Decode token and get user info
          const decodedUser = jwt_decode(token);

          // Check token expiration
          if (decodedUser.exp >= currentTime) {
            // Set auth token header
            this.setAuthToken(token);
            // Set user and isAuthenticated
            this.setCurrentUser(decodedUser);
          } else {
            this.logoutUser();
            // Redirect to login
          }
        }
      })
      .catch(err => console.error(err));
  };
}

decorate(Store, {
  user: observable
});

export default new Store();
