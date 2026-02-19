import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // paddingVertical: 20, à voir
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    backgroundColor: "#fff",
  },
});

export default styles;
