import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1e1e20",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBox: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#fff",
    overflow: "hidden",
    position: "relative",
    width: 350,
    height: "90%",
  },
  triangleCorner: {
    borderStyle: "solid",
    borderTopWidth: 20,
    borderRightWidth: 20,
    borderTopColor: "#fff",
    borderRightColor: "transparent",
    height: 0,
    position: "absolute",
    width: 0,
  },
  triangleCornerTopRight: {
    right: 0,
    top: 0,
    transform: [{ rotate: "90deg" }],
  },
  triangleCornerBottomLeft: {
    bottom: 0,
    left: 0,
    transform: [{ rotate: "270deg" }],
  },
  triangleCornerBottomRight: {
    bottom: 0,
    right: 0,
    transform: [{ rotate: "180deg" }],
  },
});
