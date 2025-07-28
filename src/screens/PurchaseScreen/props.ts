import { RouteProp } from "@react-navigation/native";
import { CarModel } from "../../components/CardView/props";

type RootStackParamList = {
  Home: undefined;
  Purchase: CarModel;
};

export type PurchaseScreenProps = {
  route: RouteProp<RootStackParamList, "Purchase">;
};
