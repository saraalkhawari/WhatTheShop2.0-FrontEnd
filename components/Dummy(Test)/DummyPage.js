import React from "react";
import { withNavigation } from "react-navigation";

export const DummyPage = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

export default withNavigation(DummyPage);
