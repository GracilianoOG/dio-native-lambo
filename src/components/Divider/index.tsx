import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

const Divider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
    </View>
  );
};

export default Divider;
