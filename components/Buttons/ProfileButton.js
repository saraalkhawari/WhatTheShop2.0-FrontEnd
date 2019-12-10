import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Button, Icon } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const Profile = ({ navigation }) => {
  if (authStore.user !== null) {
    return (
      <Button rounded dark onPress={() => navigation.navigate("Profile")}>
        <Icon
          name="user-circle"
          type="FontAwesome"
          style={{ color: "white" }}
        />
      </Button>
    );
  }
};

export default withNavigation(observer(Profile));
