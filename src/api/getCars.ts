import axios from "axios";
import { CarModel } from "../components/CardView/props";
import { CAR_API_BASE_URL } from "../constants/car";

interface ResponseModel {
  cars: CarModel[];
}

export const getCarData = async (id: number) => {
  try {
    const response = await axios.get<ResponseModel>(CAR_API_BASE_URL);
    const carData = response.data.cars.find(car => car.id === id);
    return carData;
  } catch (error) {
    console.log("Erro ao buscar os dados da API: ", error);
  }
};
