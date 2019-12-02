import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import creatureStore from "../../stores/creatureStore";

// Component
import CreatureItem from "./CreatureItem";
import CartButton from "../Buttons/CartButton";

const CreatureList = () => {
  if (creatureStore.loading) return <Spinner />;
  const creaturesList = creatureStore.creatures.map(creature => (
    <CreatureItem creature={creature} key={creature.name} />
  ));
  return (
    <Content>
      <List>{creaturesList}</List>
    </Content>
  );
};

CreatureList.navigationOptions = {
  title: "Creature List",
  headerRight: <CartButton />
};

export default observer(CreatureList);
