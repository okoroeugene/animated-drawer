import React, { useCallback } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import DrawerView from "../../navigation/DrawerView";
import { STACK_SCREEN_TWO } from "../../navigation/navigation.constants";

function StartScreen({ navigation }) {
  const handlePress = useCallback(
    () => navigation.navigate(STACK_SCREEN_TWO),
    []
  );
  return (
    <DrawerView navigation={navigation}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={{ fontSize: 18 }}>Go to Screen 2</Text>
        </TouchableOpacity>
      </View>
    </DrawerView>
  );
}

export default StartScreen;
