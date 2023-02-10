import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/configureStore";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="inverted" />
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
}
