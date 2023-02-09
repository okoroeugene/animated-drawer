import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppNavigation } from "./src/navigation/AppNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="inverted" />
      <AppNavigation />
    </NavigationContainer>
  );
}
