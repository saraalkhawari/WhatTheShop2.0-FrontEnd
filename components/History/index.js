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
  const list = history.map(item => <HistoryItem item={item} key={item.id} />);

  return (
    <Container>
      <Content>
        <List>{list}</List>
      </Content>
    </Container>
  );
};

History.navigationOptions = {
  headerRight: <CartButton />
};
export default observer(History);
