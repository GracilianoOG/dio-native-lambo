import React from "react";
import { Image, Text } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import logo from "../../../assets/logo.png";

const PurchaseScreen = ({ route }: any) => {
  const { id, carName } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.backgroundLogo} />
      <Image
        style={styles.carImage}
        source={{ uri: `${CAR_ASSETS_BASE_URL}${id}.png` }}
      />
      <Text style={styles.carName}>{carName}</Text>
      <Text style={styles.boughtText}>
        IF YOU WERE RICH, THAT CAR WOULD BE YOURS!
      </Text>
    </SafeAreaView>
  );
};

export default PurchaseScreen;
