import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Button, Text } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const Profile = ({ navigation }) => {
  if (authStore.user !== null) {
    return (
      <Button Success onPress={() => navigation.navigate("Profile")}>
        <Text>Profile</Text>
      </Button>
    );
  }
};

export default withNavigation(observer(Profile));
