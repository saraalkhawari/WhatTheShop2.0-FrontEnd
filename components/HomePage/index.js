import React from "react";

import { ImageBackground } from "react-native";
import { Button, Text, Container, Content } from "native-base";
import { withNavigation } from "react-navigation";

const HomePage = ({ navigation }) => {
  return (
    <>
      <Container>
        <ImageBackground
          style={{ flex: 1 }}
          source={require("../../assets/bg.png")}
        >
          <Content style={{ position: "absolute", bottom: 90 }}>
            <Button transparent onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "gray" }}>login / register</Text>
            </Button>
            <Button
              rounded
              dark
              onPress={() => navigation.navigate("StackNav")}
            >
              <Text>get started !</Text>
            </Button>
          </Content>
        </ImageBackground>
      </Container>
    </>
  );
};

export default withNavigation(HomePage);
