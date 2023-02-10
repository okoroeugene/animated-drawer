import { StyleSheet, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import YourCart from "../screens/YourCart/YourCart";
import Favourites from "../screens/Favourites/Favourites";
import Orders from "../screens/Orders/Orders";
import TabBavigation from "./TabNavigation";
import { commonStyles } from "../theme/commonStyles";
import {
  CART_SCREEN,
  FAVOURITES_SCREEN,
  ORDER_SCREEN,
  TAB_NAVIGATION,
} from "./navigation.constants";
import { useSelector } from "react-redux";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

const Drawer = createDrawerNavigator();

export function AppNavigation() {
  const SCREEN_OPTIONS: DrawerNavigationOptions = {
    drawerStyle: [{ backgroundColor: commonStyles.primaryColor }],
    sceneContainerStyle: [styles.scene],
    drawerType: "back",
    overlayColor: "transparent",
    headerShown: false,
  };

  const animatedValue = useSelector(
    (state: StateTypes) => state.navigator.animatedValue
  );

  const derivedValue = useDerivedValue(() => animatedValue.value);
  const viewStyles = useAnimatedStyle(() => {
    const borderTopLeftRadius = interpolate(
      derivedValue.value,
      [0, 1],
      [1, 50]
    );
    const top = interpolate(derivedValue.value, [0, 1], [1, 50]);

    return {
      top,
      borderTopLeftRadius,
    };
  });

  return (
    <Animated.View style={[styles.container, viewStyles]}>
      <Drawer.Navigator
        screenOptions={SCREEN_OPTIONS}
        initialRouteName="Home"
        drawerContent={(props) => {
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name={TAB_NAVIGATION}>
          {(props) => {
            return <TabBavigation {...props} />;
          }}
        </Drawer.Screen>
        <Drawer.Screen name={CART_SCREEN} component={YourCart} />
        <Drawer.Screen name={FAVOURITES_SCREEN} component={Favourites} />
        <Drawer.Screen name={ORDER_SCREEN} component={Orders} />
      </Drawer.Navigator>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },
  scene: {
    backgroundColor: commonStyles.primaryColor,
  },
});
