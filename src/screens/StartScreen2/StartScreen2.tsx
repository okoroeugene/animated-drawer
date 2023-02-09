import React from "react";
import { Button, Text, View } from "react-native";
import DrawerView from "../../navigation/DrawerView";

function StartScreen2({ navigation }) {
  return (
    <DrawerView navigation={navigation}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    </DrawerView>
  );
}

export default StartScreen2;
