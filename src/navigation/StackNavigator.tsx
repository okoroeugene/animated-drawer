import { createStackNavigator } from "@react-navigation/stack";
import Animated from "react-native-reanimated";
import StartScreen from "../screens/StartScreen/StartScreen";
import StartScreen2 from "../screens/StartScreen2/StartScreen2";
import { commonStyles } from "../theme/commonStyles";
import { STACK_SCREEN_ONE, STACK_SCREEN_TWO } from "./navigation.constants";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          overflow: "hidden",
        },
      ]}
    >
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
    </Animated.View>
  );
}

export default HomeStack;
