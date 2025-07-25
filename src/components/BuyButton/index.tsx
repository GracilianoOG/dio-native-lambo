import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const BuyButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyButton;
