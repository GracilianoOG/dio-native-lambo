import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1e1e20",
    flex: 1,
    justifyContent: "center",
  },
  carName: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 40,
  },
  carImage: {
    resizeMode: "contain",
    width: "100%",
    height: 250,
  },
  boughtText: {
    color: "#fff",
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
    width: "100%",
  },
});
