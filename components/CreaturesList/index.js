import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner, Button, Text } from "native-base";

// Store
import creatureStore from "../../stores/creatureStore";
import authStore from "../../stores/authStore";

// Component
import CreatureItem from "./CreatureItem";

//Buttons
import CartButton from "../Buttons/CartButton";
import LogButton from "../Buttons/LogButton";

const CreatureList = () => {
  if (creatureStore.loading) return <Spinner />;
  const creaturesList = creatureStore.creatures.map(creature => (
    <CreatureItem creature={creature} key={creature.name} />
  ));
  return (
    <Content>
      <List>{creaturesList}</List>
      <Button danger onPress={authStore.logout}>
        <Text>Logout</Text>
      </Button>
    </Content>
  );
};

CreatureList.navigationOptions = {
  title: "Creature List",
  headerRight: <CartButton />,
  headerLeft: <LogButton />
};

export default observer(CreatureList);
