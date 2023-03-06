import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";
import Feather from "react-native-vector-icons/Feather";
import IonIcons from "react-native-vector-icons/Ionicons";

const CategoryItem = ({ postproduct }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Image style={styles.image} source={postproduct.source} />
        </TouchableOpacity>

        <View style={styles.titlePostProduct}>
          <Text style={styles.titleContent}>{postproduct.title}</Text>
        </View>
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 160,
    backgroundColor: Colors.LIGHT_GREY,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius:30
  },
  titlePostProduct: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  titleContent: {
    fontSize: 12,
    color: Colors.DEFAULT_BLACK,
    fontWeight: 600,
    textAlign:"center"
  },
});
