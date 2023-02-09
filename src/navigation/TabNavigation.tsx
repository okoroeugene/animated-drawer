import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { commonStyles } from "../theme/commonStyles";
import Profile from "../screens/Contact/Contact";
import StackNavigator from "./StackNavigator";
import {
  APP_NAVIGATOR,
  TAB_STACK_CONTACT,
  TAB_STACK_HOME,
} from "./navigation.constants";

const Tab = createBottomTabNavigator();

export function TabBavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: commonStyles.primaryColor,
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: commonStyles.danger,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === APP_NAVIGATOR) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === TAB_STACK_CONTACT) {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={APP_NAVIGATOR}
        options={{ tabBarLabel: TAB_STACK_HOME }}
        component={StackNavigator}
      />
      <Tab.Screen name={TAB_STACK_CONTACT} component={Profile} />
    </Tab.Navigator>
  );
}
