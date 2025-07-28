import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import logo from "../../../assets/logo.png";
import { styles } from "./styles";
import Divider from "../Divider";
import {
  CAR_ASSETS_BASE_URL,
  CAR_MAX_ID,
  CAR_MIN_ID,
} from "../../constants/car";
import BuyButton from "../BuyButton";
import { CardViewProps, CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";
import AntDesign from "@expo/vector-icons/AntDesign";

const CardView = ({ navigation }: CardViewProps) => {
  const [carData, setCarData] = useState<CarModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData);
    })();
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={logo} />
    </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>
        Lamborghini <Text style={styles.carId}>#{carData?.id}</Text>
      </Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.carImage}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`,
      }}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <TouchableOpacity
        disabled={carData?.id === CAR_MIN_ID}
        style={[
          styles.priceArrow,
          carData?.id === CAR_MIN_ID
            ? styles.priceArrowDisabled
            : styles.priceArrowEnabled,
        ]}
        onPress={() => handlePreviousItem(carData, setCarData)}
      >
        <AntDesign name="arrowleft" size={22} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <TouchableOpacity
        disabled={carData?.id === CAR_MAX_ID}
        style={[
          styles.priceArrow,
          carData?.id === CAR_MAX_ID
            ? styles.priceArrowDisabled
            : styles.priceArrowEnabled,
        ]}
        onPress={() => handleNextItem(carData, setCarData)}
      >
        <AntDesign name="arrowright" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  const handlePurchase = () => {
    navigation.navigate("Purchase", carData as CarModel);
  };

  return (
    <View style={styles.container}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <View style={{ paddingHorizontal: 32 }}>
        <BuyButton title="Purchase" onPress={handlePurchase} />
        {renderPriceControls()}
      </View>
    </View>
  );
};

export default CardView;
