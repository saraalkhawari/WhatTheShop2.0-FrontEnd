import React from "react";
import { observer } from "mobx-react";
import { Alert } from "react-native";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { Text, List, Button, Content, Container } from "native-base";

// Component
import CartItem from "./CartItem";
import FooterComp from "../FooterComp";

//Buttons

// Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import HomeButton from "../Buttons/HomeButton";

const CreatureCart = ({ navigation }) => {
  const cartItems = cartStore.items.map(item => (
    <CartItem item={item} key={`${item.name}`} />
  ));
  const handleCheckout = () => {
    if (authStore.user === null) {
      return Alert.alert(
        "HALT!",
        "You will need to login to proceed. login now?",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("Login")
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ]
      );
    } else {
      cartStore.checkoutCart();
    }
  };

  return (
    <Container>
      <Content>
        <List>
          {cartItems}
          <Button rounded dark onPress={handleCheckout}>
            <Text>{`                                Checkout`}</Text>
          </Button>
        </List>
      </Content>
      <FooterComp />
    </Container>
  );
};

CreatureCart.navigationOptions = {
  title: "Cart",
  headerTintColor: "gray",
  headerTitleStyle: {
    color: "white",
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9
  }
};

export default withNavigation(observer(CreatureCart));
