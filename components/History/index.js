import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Accordion,
  Container,
  CardItem,
  Content,
  Text,
  Spinner,
  List,
  Left,
  Body,
  Right,
  ListItem
} from "native-base";

//Store
import authStore from "../../stores/cartStore";
import dummy from "../../stores/dummyHistory";
import cartStore from "../../stores/cartStore";

//Buttons
import CartButton from "../Buttons/CartButton";
import HistoryItem from "./HistoryItem";

const History = () => {
  const history = cartStore.history;
  const list = history.map((item, idx) => (
    <HistoryItem item={item} key={idx} />
  ));

  return (
    <Container>
      <Content>
        <List>{list}</List>
      </Content>
    </Container>
  );
};

History.navigationOptions = {
  headerRight: <CartButton />,
  headerTintColor: "gray",
  headerTitleStyle: {
    color: "white",
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9
  }
};
export default observer(History);
