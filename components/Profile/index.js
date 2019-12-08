import React from "react";

// NativeBase Components
import { Container, CardItem, Text } from "native-base";
import { Avatar } from "react-native-elements";

//Store
import authStore from "../../stores/authStore";

//Buttons
import CartButton from "../Buttons/CartButton";
import LogButton from "../Buttons/LogButton";

const Profile = () => {
  return (
    <Container>
      <Avatar
        size="xlarge"
        rounded
        source={require("../../assets/avatar1.png")}
        onPress={() => console.log("Works!")}
        activeOpacity={0.1}
      />
      {console.log("user>>", authStore.user.username)}
      <LogButton />
    </Container>
  );
};

Profile.navigationOptions = {
  headerRight: <CartButton />
};
export default Profile;
