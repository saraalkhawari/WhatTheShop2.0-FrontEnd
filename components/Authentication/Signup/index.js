import React, { Component } from "react";
import { observer } from "mobx-react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import FooterComp from "../../FooterComp";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../../stores/authStore";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handlePress = () => {
    authStore.signup(this.state, this.props.navigation);
  };

  render() {
    return (
      <>
        <View style={styles.authContainer}>
          <Form>
            <Item>
              <Input
                placeholder="Username"
                autoCapitalize="none"
                onChangeText={username => this.setState({ username })}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button rounded dark onPress={this.handlePress}>
              <Text>{`                   Signup`}</Text>
            </Button>
            <Text
              style={styles.authOther}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Already a User? Click here to login!
            </Text>
          </Form>
        </View>
        <FooterComp />
      </>
    );
  }
}
Signup.navigationOptions = {
  title: "Signup"
};
export default observer(Signup);
