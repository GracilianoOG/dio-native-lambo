import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { BuyButtonProps } from "./props";

const BuyButton = ({ title }: BuyButtonProps) => {
  const handlePress = () => {
    Alert.alert(
      "Confirm purchase",
      "Do you want to purchase that lamborghini?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Buy",
          onPress: () => {
            console.log("Car bought");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <AntDesign
          name="shoppingcart"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyButton;
