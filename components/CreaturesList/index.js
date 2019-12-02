import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, List } from "native-base";

// Store
import CreatureStore from "../../stores/creatureStore";

// Component
import CreatureItem from "./CreatureItem";

const CreatureList = () => {
  const creaturesList = CreatureStore.creatures.map(creature => (
    <CreatureItem creature={creature} key={creature.name} />
  ));
  return (
    <Content>
      <List>{creaturesList}</List>
    </Content>
  );
};

CreatureList.navigationOptions = {
  title: "Creature List"
};

export default observer(CreatureList);
