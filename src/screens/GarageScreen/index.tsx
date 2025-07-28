import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import CardView from "../../components/CardView";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { GarageScreenProps } from "./props";

const GarageScreen = ({ navigation }: GarageScreenProps) => {
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
        <CardView navigation={navigation} />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default GarageScreen;
