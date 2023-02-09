import React from "react";
import { Button, Text, View } from "react-native";
import DrawerView from "../../navigation/DrawerView";

function Contact({ navigation }) {
  return (
    <DrawerView navigation={navigation}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Contact Screen</Text>
      </View>
    </DrawerView>
  );
}

export default Contact;
