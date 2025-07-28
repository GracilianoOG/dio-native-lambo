import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import CardView from "../../components/CardView";
import { SafeAreaView } from "react-native-safe-area-context";

const GarageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
        <CardView />
      </View>
    </SafeAreaView>
  );
};

export default GarageScreen;
