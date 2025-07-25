import React from "react";
import { Image, Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import { styles } from "./styles";
import Divider from "../Divider";

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
        uri: "https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/1.png",
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
