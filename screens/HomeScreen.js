//tran tu
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import Feather from "react-native-vector-icons/Feather";
import Swiper from "react-native-swiper";
import Images from "../constants/Images";
import PostProductItem from "../components/PostProductItem";

const dataPostProducts = [
  {
    id: "1",
    source:`${require("../images/postproduct/iphone.jpg")}`,
    title: "Cần bán iphone 14 ",
    price:"5.500.000",
    time:"hôm qua"
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Third Item",
  },
  {
    id: "5",
    title: "Third Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_PINK}
        translucent
      />

      <View style={styles.backgroundCurvedContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <Feather
              name="search"
              size={22}
              color={Colors.DEFAULT_GREY}
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder="Tìm kiếm"
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              style={styles.inputText}
              // onChangeText={(text) => setUsername(text)}
            />
          </View>
        </View>

        <Feather
          name="bell"
          size={25}
          color={Colors.DEFAULT_BLACK}
          style={{ marginRight: 10, marginTop: 40 }}
        />
      </View>
      <ScrollView>
        <View style={{ flex: 1, width: "100%", height: 120 }}>
          <Swiper
            containerStyle={styles.wrapper}
            showsButtons={false}
            loop={true}
            autoplay={true}
            paginationStyle={false}
            showsPagination={false}
          >
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require("../images/banners/banner_one.jpg")}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require("../images/banners/banner_two.jpg")}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require("../images/banners/banner_three.jpg")}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require("../images/banners/banner_four.jpg")}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.main}>
          <View style={styles.title}>
            <Text style={styles.content}>Tin đăng dành cho bạn</Text>
          </View>
          {/* product */}
          <View style={styles.mainContainer}>
            <FlatList
              data={dataPostProducts}
              numColumns={2}
              keyExtractor={(item) => item?.id}
              renderItem={({ item }) => (
                <PostProductItem postproduct={item}
                  {...item}
                  navigate={() => navigation.navigate("RestaurantScreen")}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundCurvedContainer: {
    flexDirection: "row",
    backgroundColor: Colors.DEFAULT_PINK,
    height: 90,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    zIndex: -1,
  },
  inputContainer: {
    width: "80%",
    height: 35,
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginTop: 40,
    marginHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.DEFAULT_PINK,
    justifyContent: "center",
  },
  inputSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: "center",
    padding: 0,
    height: "100%",
    width: 100,
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  paginationText: {
    color: "white",
    fontSize: 20,
  },
  main: {},
  title: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    backgroundColor: Colors.LIGHT_GREY,
    marginVertical: 5,
  },
  content: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 16,
    fontWeight: 600,
    padding: 10,
  },
  mainContainer: {
    marginHorizontal: 10,
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
  },
});
