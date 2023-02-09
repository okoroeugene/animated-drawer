import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  useDrawerProgress,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";

import { SafeAreaView } from "react-native-safe-area-context";
import { hexToRgbOpacity } from "../helpers";
import { commonStyles } from "../theme/commonStyles";

export default ({ state, navigation }) => {
  return (
    <Animated.View style={[styles.container]}>
      <SafeAreaView style={styles.drawerWrapper} edges={["top"]}>
        <DrawerContentScrollView
          contentContainerStyle={styles.drawerContentContainerStyle}
        >
          <Text style={styles.logo}>Beka</Text>
          <View style={styles.innerWrapper}>
            {state.routes.map((route, index) => {
              const isFocused = state.index === index;
              return (
                <DrawerItem
                  key={route.key}
                  label={({ focused }) => {
                    return (
                      <Text
                        style={[
                          focused ? styles.activeText : styles.inactiveText,
                          styles.itemText,
                        ]}
                      >
                        {route.name}
                      </Text>
                    );
                  }}
                  style={[
                    isFocused
                      ? styles.activeContainer
                      : styles.inActiveContainer,
                    styles.itemWrapper,
                  ]}
                  onPress={() => navigation.navigate(`${route.name}`)}
                  focused={isFocused}
                  activeBackgroundColor="transparent"
                />
              );
            })}

            <View style={styles.line} />
            <TouchableOpacity>
              <Text style={styles.signoutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  drawerContentContainerStyle: {
    paddingTop: 0,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },
  innerWrapper: {
    marginTop: 40,
    padding: 20,
  },
  itemText: {
    fontSize: 18,
  },
  itemWrapper: {
    marginBottom: 15,
  },
  drawerWrapper: {
    flex: 1,
    marginTop: 50,
  },
  activeContainer: {
    backgroundColor: hexToRgbOpacity(commonStyles.danger, 0.25),
    borderRadius: 10,
    padding: 6,
  },
  activeText: {
    fontWeight: "bold",
    color: "#E44B44",
    backgroundColor: "transparent",
  },
  inActiveContainer: {
    borderLeftWidth: 1.06,
    borderLeftColor: "transparent",
    backgroundColor: "transparent",
    borderRadius: 0.8,
    marginTop: 0,
  },
  inactiveText: {
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
  },
  line: {
    borderWidth: 0.3,
    borderColor: "#FCFCFF",
    marginTop: 50,
  },
  signoutText: {
    textAlign: "center",
    color: "#FFF",
    padding: 30,
    fontSize: 20,
  },
});
