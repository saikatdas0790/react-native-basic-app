import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Greeting name="Saikat" />
        <Greeting name="Ankita" />
        <Greeting name="Domino" />
      </View>
    );
  }
}

AppRegistry.registerComponent("BasicApp", () => LotsOfGreetings);
