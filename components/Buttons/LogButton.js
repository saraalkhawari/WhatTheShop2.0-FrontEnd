import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Button, Text } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const Log = () => {
  if (authStore.user) {
    return (
      <Button Success onPress={authStore.login}>
        <Text>Login</Text>
      </Button>
    );
  } else {
    return (
      <Button danger onPress={authStore.logout}>
        <Text>Logout</Text>
      </Button>
    );
  }
};

export default withNavigation(observer(Log));
