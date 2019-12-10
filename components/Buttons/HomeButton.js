import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Button, Icon, Text } from "native-base";

const HomeButton = ({ navigation }) => {
  return (
    <Button rounded dark onPress={() => navigation.navigate("HomePage")}>
      <Icon
        name="alpha-w-circle"
        type="MaterialCommunityIcons"
        style={{ color: "white" }}
      />
    </Button>
  );
};

export default withNavigation(observer(HomeButton));
