import React from "react";
import { Button, View } from "react-native";
import DrawerView from "../../navigation/DrawerView";

function Orders({ navigation }) {
  return (
    <DrawerView navigation={navigation}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </DrawerView>
  );
}

export default Orders;
