import { GarageScreenProps } from "../../screens/GarageScreen/props";

export interface CarModel {
  id: number;
  carName: string;
  releaseYear: number;
  price: string;
}

export type CardViewProps = {} & GarageScreenProps;
