import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

//Buttons
import CartButton from "../Buttons/CartButton";
import LogButton from "../Buttons/LogButton";

const Profile = () => {
  return (
    <Card>
      <CardItem></CardItem>
    </Card>
  );
};

Profile.navigationOptions = {
  title: "Profile",
  headerRight: <CartButton />,
  headerLeft: <LogButton />
};
export default Profile;
