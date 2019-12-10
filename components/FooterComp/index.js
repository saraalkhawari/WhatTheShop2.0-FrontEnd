import React, { Component } from "react";
//buttons
import LogButton from "../Buttons/LogButton";
import ProfileButton from "../Buttons/ProfileButton";
import HomeButton from "../Buttons/HomeButton";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon
} from "native-base";

class FooterComp extends Component {
  render() {
    return (
      <Footer style={{ backgroundColor: "white", height: 60 }}>
        <LogButton style={{ paddingTop: 10 }} />
        <FooterTab></FooterTab>
        <ProfileButton />
        <FooterTab></FooterTab>
        <HomeButton />
      </Footer>
    );
  }
}

export default FooterComp;
