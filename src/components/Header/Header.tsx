import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
const Header = () => {
  return (
    <View style={styles.headerView}>
      <View style={styles.imageView}>
        <Image
          source={{ uri: "https://s.ws.pho.to/img/index/ai/source.jpg" }}
          style={styles.image}
        />
      </View>
      <View style={styles.searchBarView}>
        <Text>Search</Text>
      </View>
      <TouchableOpacity style={styles.messageIconView}>
        <AntDesign name="message1" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 9,
    marginTop: 5,
  },

  searchBarView: { width: "70%" },
  imageView: { width: "15%" },
  messageIconView: {
    width: "15%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  image: { resizeMode: "contain", width: 40, height: 40, borderRadius: 40 },
});
