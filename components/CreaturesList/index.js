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

import ProfileButton from "../Buttons/ProfileButton";

const CreatureList = () => {
  if (creatureStore.loading) return <Spinner />;
  const creaturesList = creatureStore.creatures.map(creature => (
    <CreatureItem creature={creature} key={creature.name} />
  ));
  return (
    <>
      <Content>
        <List>{creaturesList}</List>

        <ProfileButton />
      </Content>
    </>
  );
};
<LogButton />;
CreatureList.navigationOptions = {
  title: "Creature List",
  headerRight: <CartButton />
};

export default observer(CreatureList);
