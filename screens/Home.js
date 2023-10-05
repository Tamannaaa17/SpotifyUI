import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Data from "../components/HomeData";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ margin: "5%" }}>
          <View style={{ margin: "5%" }}></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "5%",
              marginTop: "5%",
            }}
          >
            <Text style={styles.title}>Welcome Back!</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={30}
                  color="#fff"
                  style={{ paddingRight: "5%" }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="settings-outline" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.tabs}>
            <TouchableOpacity
              style={{
                backgroundColor: "#282828",
                borderRadius: 30,
                padding: 10,
                marginRight: "3%",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 15 }}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#282828",
                borderRadius: 30,
                padding: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 15 }}>
                Podcasts & Shows
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.musicCardContainer}>
            {Data?.map((data, index) => (
              <TouchableOpacity
                style={[styles.musicCard, { marginRight: "3%" }]}
                key={index}
              >
                <Image source={data.image} style={{ height: 60, width: 55 }} />
                <Text style={styles.cardText}>{data.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ marginTop: "5%" }}></View>
          <View style={{ marginTop: "5%" }}>
            <Text style={styles.title}>Jump Back In!</Text>
            <View style={styles.musicCardContainer}>
              <TouchableOpacity
                style={{ alignItems: "center", marginRight: "5%" }}
              >
                <Image
                  source={require("../assets/artist6.jpg")}
                  style={{ width: 160, height: 160 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    marginTop: "5%",
                    fontWeight: "bold",
                  }}
                >
                  Liked Songs
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/artist4.jpeg")}
                  style={{ width: 160, height: 160 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    marginTop: "5%",
                    fontWeight: "bold",
                  }}
                >
                  This is Two Feet
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: "5%" }}></View>
          <View style={{ marginTop: "5%" }}>
            <Text style={styles.title}>More Of What You Like!</Text>
            <View style={styles.musicCardContainer}>
              <TouchableOpacity
                style={{ alignItems: "center", marginRight: "5%" }}
              >
                <Image
                  source={require("../assets/playlist1.jpeg")}
                  style={{ width: 160, height: 160 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    marginTop: "5%",
                  }}
                >
                  Artist #1, Artist #2, Artist #3..
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/playlist2.jpeg")}
                  style={{ width: 160, height: 160 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    marginTop: "5%",
                  }}
                >
                  Artist #1, Artist #2, Artist #3..
                </Text>
              </TouchableOpacity>
            </View>
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
  tabs: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: "10%",
  },
  musicCard: {
    flexDirection: "row",
    backgroundColor: "#282828",
    alignItems: "center",
    borderRadius: 7,
    width: Dimensions.get("screen").width * 0.422,
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
    marginLeft: "3.8%",
    flex: 1,
    flexWrap: "wrap",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
