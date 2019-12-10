import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Icon, Text } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const LogFab = ({ navigation }) => {
  if (authStore.user === null) {
    return (
      <Button
        style={{ backgroundColor: "red" }}
        onPress={() => navigation.navigate("Login")}
      >
        <Icon name="logo-whatsapp" />
      </Button>
    );
  } else {
    return (
      <Button style={{ backgroundColor: "green" }} onPress={authStore.logout}>
        <Icon name="logo-whatsapp" />
      </Button>
    );
  }
};

export default withNavigation(observer(LogFab));
