import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: "100%",
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
    width: "65%",
  },
  carBrand: {
    color: "#fff",
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "400",
  },
  carId: { color: "gold", fontWeight: "bold" },
  carName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  carImage: {
    flex: 1,
    height: "100%",
    marginBottom: 10,
    resizeMode: "contain",
    width: "100%",
  },
  priceLabelContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 10,
  },
  priceLabel: {
    color: "#fff",
    fontSize: 22,
  },
});
