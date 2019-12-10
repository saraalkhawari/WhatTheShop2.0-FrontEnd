import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  List,
  Content,
  Card,
  Spinner,
  Button,
  Text,
  Footer,
  FooterTab
} from "native-base";

// Store
import creatureStore from "../../stores/creatureStore";
import authStore from "../../stores/authStore";

// Component
import CreatureItem from "./CreatureItem";
import FooterComp from "../FooterComp";

//Buttons
import CartButton from "../Buttons/CartButton";

const CreatureList = () => {
  if (creatureStore.loading) return <Spinner />;
  const creaturesList = creatureStore.creatures.map(creature => (
    <CreatureItem creature={creature} key={creature.name} />
  ));
  return (
    <>
      <Content>{creaturesList}</Content>
      <FooterComp />
    </>
  );
};
CreatureList.navigationOptions = {
  title: "Creatures List",
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

export default observer(CreatureList);
