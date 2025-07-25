import { getCarData } from "../../api/getCars";
import { CarModel } from "./props";

export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    const response = await getCarData(id);
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    setCarData(null);
    console.log("Erro ao buscar os dados na API: ", error);
  }
};

export const handlePreviousItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    if (carData && carData?.id > 1) {
      const response = await getCarData(carData.id - 1);

      if (response) {
        setCarData(response);
      }
    }
  } catch (error) {
    console.log("Erro ao chamar a API: ", error);
    setCarData(null);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    if (carData && carData?.id < 10) {
      const response = await getCarData(carData.id + 1);

      if (response) {
        setCarData(response);
      }
    }
  } catch (error) {
    console.log("Erro ao chamar a API: ", error);
    setCarData(null);
  }
};
