import React from "react";
import { Button, Image, Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import { styles } from "./styles";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";

const CardView = () => {
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={logo} />
    </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>MODEL</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.carImage}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}1.png`,
      }}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button title="<" color={"#01a6b3"} onPress={() => {}} />
      <Text style={styles.priceLabel}>Valor</Text>
      <Button title=">" color={"#01a6b3"} onPress={() => {}} />
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
