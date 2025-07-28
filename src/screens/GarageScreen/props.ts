import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CarModel } from "../../components/CardView/props";

type RootStackParamList = {
  Home: undefined;
  Purchase: CarModel;
};

export type GarageScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};
