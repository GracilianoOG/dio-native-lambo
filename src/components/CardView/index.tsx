import React, { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import { styles } from "./styles";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";

const CardView = () => {
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
      <Text style={styles.carBrand}>Lamborghini</Text>
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
      <Button
        title="<"
        disabled={carData?.id === 1}
        color={"#01a6b3"}
        onPress={() => handlePreviousItem(carData, setCarData)}
      />
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button
        title=">"
        disabled={carData?.id === 10}
        color={"#01a6b3"}
        onPress={() => handleNextItem(carData, setCarData)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
};

export default CardView;
