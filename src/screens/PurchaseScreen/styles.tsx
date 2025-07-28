import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1e1e20",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    paddingHorizontal: 8,
  },
  carName: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 28,
    marginBottom: 40,
    textAlign: "center",
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
  backgroundLogo: {
    opacity: 0.25,
    position: "absolute",
    resizeMode: "contain",
    width: "100%",
  },
});
