import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

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
});
