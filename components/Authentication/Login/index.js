import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../../stores/authStore";

//Styling components
import styles from "../Signup/styles";
import { TextInput, TouchableOpacity, View } from "react-native";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handlePress = () => {
    authStore.login(this.state, this.props.navigation);
  };

  render() {
    return (
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
          <Button full onPress={this.handlePress}>
            <Text>Login</Text>
          </Button>
          <Text
            style={styles.authOther}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            Not a User? Click here to register!
          </Text>
        </Form>
      </View>
    );
  }
}
export default observer(Login);
