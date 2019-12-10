import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Button, Icon, Text } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const HistoryButton = ({ navigation }) => {
  if (authStore.user !== null) {
    return (
      <Button rounded dark onPress={() => navigation.navigate("History")}>
        <Icon
          name="restore-clock"
          type="MaterialCommunityIcons"
          style={{ color: "white" }}
        />
        <Text>Order History</Text>
      </Button>
    );
  }
};

export default withNavigation(observer(HistoryButton));
