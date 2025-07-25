import React from "react";
import { Image, Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import { styles } from "./styles";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";

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

  return (
    <View style={styles.container}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
    </View>
  );
};

export default CardView;
