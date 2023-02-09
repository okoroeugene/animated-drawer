import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { commonStyles } from "../theme/commonStyles";
import Profile from "../screens/Contact/Contact";
import StackNavigator from "./StackNavigator";

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

          if (route.name === "AppNavigator") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="AppNavigator"
        options={{ tabBarLabel: "Home" }}
        component={StackNavigator}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
