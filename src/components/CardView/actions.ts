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

export const handlePreviousItem = async () => {};

export const handleNextItem = async () => {};
