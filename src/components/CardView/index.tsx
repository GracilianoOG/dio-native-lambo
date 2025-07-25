import React from "react";
import { Image, Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import { styles } from "./styles";

const CardView = () => {
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={logo} />
    </View>
  );

  return <View style={styles.container}>{renderLogoBox()}</View>;
};

export default CardView;
