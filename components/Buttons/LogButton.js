import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Button, Icon, Text } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const Log = ({ navigation }) => {
  if (authStore.user === null) {
    return (
      <Button rounded dark onPress={() => navigation.navigate("Login")}>
        <Icon
          name="login"
          type="MaterialCommunityIcons"
          style={{ color: "white" }}
        />
        <Text>Login </Text>
      </Button>
    );
  } else {
    return (
      <Button rounded danger onPress={authStore.logout}>
        <Icon
          name="logout"
          type="MaterialCommunityIcons"
          style={{ color: "white" }}
        />
        <Text>Logout</Text>
      </Button>
    );
  }
};

export default withNavigation(observer(Log));
