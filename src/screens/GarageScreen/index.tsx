import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const GarageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner}></View>
        <View
          style={[styles.triangleCorner, styles.triangleCornerTopRight]}
        ></View>
        <View
          style={[styles.triangleCorner, styles.triangleCornerBottomLeft]}
        ></View>
        <View
          style={[styles.triangleCorner, styles.triangleCornerBottomRight]}
        ></View>
      </View>
    </View>
  );
};

export default GarageScreen;
