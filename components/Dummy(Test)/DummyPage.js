import React from "react";
import { Icon } from "native-base";

const DummyPage = () => {
  return (
    <Icon
      type="Octicons"
      name="smiley"
      style={{
        fontSize: 300,
        alignSelf: "center",
        paddingTop: "50%",
        color: "red"
      }}
    />
  );
};

export default DummyPage;
