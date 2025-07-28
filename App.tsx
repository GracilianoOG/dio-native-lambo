import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GarageScreen from "./src/screens/GarageScreen";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={GarageScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
