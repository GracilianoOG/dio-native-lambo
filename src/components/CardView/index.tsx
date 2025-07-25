import React from "react";
import { Image, Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import { styles } from "./styles";

const CardView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
    </View>
  );
};

export default CardView;
