import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

//Store
import authStore from "../../stores/authStore";

//Buttons
import CartButton from "../Buttons/CartButton";
import LogButton from "../Buttons/LogButton";

const Profile = () => {
  return (
    <Card>
      {authStore.user}
      {console.log("profile")}
    </Card>
  );
};

Profile.navigationOptions = {
  headerRight: <CartButton />,
  headerLeft: <LogButton />
};
export default Profile;
