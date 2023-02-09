import { StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import YourCart from "../screens/YourCart/YourCart";
import Favourites from "../screens/Favourites/Favourites";
import Orders from "../screens/Orders/Orders";
import { TabBavigation } from "./TabNavigation";
import { commonStyles } from "../theme/commonStyles";
import {
  CART_SCREEN,
  FAVOURITES_SCREEN,
  ORDER_SCREEN,
  TAB_NAVIGATION,
} from "./navigation.constants";

const Drawer = createDrawerNavigator();

export function AppNavigation() {
  const SCREEN_OPTIONS: DrawerNavigationOptions = {
    drawerStyle: [{ backgroundColor: commonStyles.primaryColor }],
    sceneContainerStyle: [styles.scene],
    drawerType: "back",
    overlayColor: "transparent",
    headerShown: false,
  };

  return (
    <Drawer.Navigator
      screenOptions={SCREEN_OPTIONS}
      initialRouteName="Home"
      drawerContent={(props) => {
        return <DrawerContent {...props} />;
      }}
    >
      <Drawer.Screen name={TAB_NAVIGATION}>
        {(props: any) => <TabBavigation {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name={CART_SCREEN} component={YourCart} />
      <Drawer.Screen name={FAVOURITES_SCREEN} component={Favourites} />
      <Drawer.Screen name={ORDER_SCREEN} component={Orders} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scene: {
    backgroundColor: commonStyles.primaryColor,
  },
});
