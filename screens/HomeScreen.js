//tran tu
import {
  FlatList,
  Image,
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
import { ScrollView } from 'react-native-virtualized-view';

const dataPostProducts = [
  {
    id: "1",
    source: {
      uri: "https://imaxmobile.vn/media/data/iphone-8-plus-64GB-cu-5.jpg",
    },
    title: "Cần bán iphone 8 plus ",
    price: "2.500.000",
    time: "hôm qua",
  },
  {
    id: "2",
    source: {
      uri: "https://filebroker-cdn.lazada.vn/kf/S35d38b24ffb340829a6eb2ffdd6953d2k.jpg",
    },
    title: "Bán quạt",
    price: "150.000",
    time: "2 ngày trước",
  },
  {
    id: "3",
    source: {
      uri: "https://kiemtraxecu.com/wp-content/uploads/2019/08/wave-cu.jpg",
    },
    title: "Bán xe wave alpha",
    price: "5.000.000",
    time: "2 ngày trước",
  },
  {
    id: "4",
    source: {
      uri: "https://muabandonghothuysy.com/wp-content/uploads/2020/04/longines-l4.778.8.12.0-6-767x1024.jpg",
    },
    title: "đồng hồ",
    price: "300.000",
    time: "5 ngày trước",
  },
  {
    id: "5",
    source: {
      uri: "https://my-test-11.slatic.net/p/e408f7184807efa1e228f8c600b27239.jpg",
    },
    title: "pass lại đôi giày",
    price: "250.000",
    time: "5 ngày trước",
  },

  {
    id: "6",
    source: {
      uri: "https://cf.shopee.vn/file/bd8c7f85886064dafd6bf4f2896982b2",
    },
    title: "pass lại áo sơ 80%",
    price: "200.000",
    time: "1 ngày trước",
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
      <ScrollView >
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

        {/* product */}
        <View style={styles.title}>
          <Text style={styles.content}>Tin đăng dành cho bạn</Text>
        </View>
        <View style={styles.mainContainer}>
          <FlatList
            data={dataPostProducts}
            numColumns={2}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => <PostProductItem postproduct={item} />}
          />
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
  },
});
