import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Data from "../components/SearchData";

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ margin: "5%" }}>
          <View style={{ marginTop: "10%" }}></View>
          <Text style={styles.title}>Search</Text>
          <View style={styles.inputContainer}>
            <Feather
              name="search"
              size={24}
              color="#000"
              style={{ marginRight: "4%" }}
            />
            <TextInput
              style={styles.input}
              placeholder="What do you want to listen to?"
              placeholderTextColor="black"
              cursorColor={"#000"}
              autoCapitalize="none"
            ></TextInput>
          </View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              marginTop: "3%",
              paddingHorizontal: "3%",
            }}
          >
            Browse All
          </Text>
          <View style={styles.musicCardContainer}>
          {Data?.map((data, index) => (
              <TouchableOpacity
                style={[styles.musicCard, { marginRight: "5%", backgroundColor: data.color }]}
                key={index}
              >
                <Text style={styles.cardText}>{data.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    opacity: 0.9,
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 10,
    marginTop: "5%",
    paddingHorizontal: "4%",
    paddingVertical: "3%",
    width: Dimensions.get("screen").width * 0.9,
  },
  inputIcon: {
    width: 25,
    height: 25,
    marginRight: "4%",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#000",
  },
  musicCard: {
    flexDirection: "row",
    // backgroundColor: "#282828",
    alignItems: "center",
    borderRadius: 7,
    width: Dimensions.get("screen").width * 0.4,
    height:100,
    marginBottom: "5%",
  },
  musicCardContainer: {
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  cardText: {
    color: "#fff",
    // marginLeft: "3.8%",
    flex: 1,
    flexWrap: "wrap",
    fontSize:30,
    textAlign:'center'
  },
});
