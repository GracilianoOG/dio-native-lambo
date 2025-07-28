import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

const PurchaseScreen = ({ route }: any) => {
  const { id, carName } = route.params;

  return (
    <View style={styles.container}>
      <Text>{carName}</Text>
    </View>
  );
};

export default PurchaseScreen;
