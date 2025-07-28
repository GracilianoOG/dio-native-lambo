import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GarageScreen from "./src/screens/GarageScreen";
import { NavigationContainer } from "@react-navigation/native";
import PurchaseScreen from "./src/screens/PurchaseScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={GarageScreen} />
        <Screen name="Purchase" component={PurchaseScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
