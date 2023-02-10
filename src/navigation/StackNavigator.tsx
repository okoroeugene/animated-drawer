import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/StartScreen/StartScreen";
import StartScreen2 from "../screens/StartScreen2/StartScreen2";
import { commonStyles } from "../theme/commonStyles";
import { STACK_SCREEN_ONE, STACK_SCREEN_TWO } from "./navigation.constants";

const Stack = createStackNavigator();

function StackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: commonStyles.primaryColor,
        },
      }}
    >
      <Stack.Screen name={STACK_SCREEN_ONE} component={StartScreen} />
      <Stack.Screen name={STACK_SCREEN_TWO} component={StartScreen2} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
