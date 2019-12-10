import React, { Component } from "react";
import { Container, Header, View, Button, Fab, Icon } from "native-base";
import LogFab from "../Buttons/LogFab";
class RightFab extends Component {
  state = {
    active: false
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Fab
          active={this.state.active}
          direction="left"
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="share" />
          <LogFab />
          {/* <Button style={{ backgroundColor: "#34A34F" }}>
            <Icon name="share" />
          </Button>
          <Button disabled style={{ backgroundColor: "#34A34F" }}>
            <Icon name="share" />
          </Button> */}
        </Fab>
      </View>
    );
  }
}

export default RightFab;
