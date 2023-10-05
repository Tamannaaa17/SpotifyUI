import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const handleLoginClicked = () => {
    navigation.navigate("Tab");
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ margin: "5%" }}>
        <Entypo
          style={{ textAlign: "center" }}
          name="spotify"
          size={80}
          color="white"
        />
        <Text style={styles.title}>Millions of Songs Free on spotify!</Text>
        <View style={{ marginTop: "5%" }}>
          <TouchableOpacity style={styles.button} onPress={handleLoginClicked}>
            <Text style={styles.buttonText}>Sign In with Spotify!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSeeThrough}
            onPress={handleLoginClicked}
          >
            <MaterialIcons
              name="phone-android"
              size={24}
              color="white"
              style={{ marginRight: "3%" }}
            />
            <Text style={styles.buttonText}>Continue with phone number</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSeeThrough}
            onPress={handleLoginClicked}
          >
            <AntDesign
              name="google"
              size={24}
              color="red"
              style={{ marginRight: "3%" }}
            />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSeeThrough}
            onPress={handleLoginClicked}
          >
            <Entypo
              name="facebook"
              size={24}
              color="blue"
              style={{ marginRight: "3%" }}
            />
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    opacity: 0.9,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "5%",
  },
  button: {
    backgroundColor: "#1DB954",
    borderRadius: 20,
    paddingVertical: "4%",
    marginTop: "6%",
    width: Dimensions.get("screen").width * 0.85,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonSeeThrough: {
    borderRadius: 20,
    paddingVertical: "4%",
    marginTop: "6%",
    width: Dimensions.get("screen").width * 0.85,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#131624",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1%",
  },
});
