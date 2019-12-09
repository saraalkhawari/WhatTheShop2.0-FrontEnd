import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Button, Text } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const HistoryButton = ({ navigation }) => {
  if (authStore.user !== null) {
    return (
      <Button rounded dark onPress={() => navigation.navigate("History")}>
        <Text>History</Text>
      </Button>
    );
  }
};

export default withNavigation(observer(HistoryButton));
