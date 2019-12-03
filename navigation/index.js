import { createAppContainer } from "react-navigation";
import StackNav from "./StackNav";
import BottomTab from "./BottomTab";
import SwitchNav from "./SwitchNav";

// const AppContainer = createAppContainer(StackNav);
const AppContainer = createAppContainer(SwitchNav);

export default AppContainer;
