import React from 'react'

import { StyleSheet, Image, Text, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native-gesture-handler";
function LandingPage({navigation}) {
    let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
    return (
        <View style={styles.container}>
        <Image source={require("../img/dog-pic.png")} style={styles.img} />
        <Text style={styles.title}>Dog's Farm</Text>
        <Text style={styles.detail}>
          In this app, you'll see lists of dogs that you might never know before
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    )
}

export default LandingPage
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#121212",
    },
    img: {
      height: "50%",
      width: "120%",
      resizeMode: "contain",
    },
    title: {
      color: "#FFF",
      fontFamily: "Montserrat_700Bold",
      fontSize: 30,
      marginTop: 20,
    },
    detail: {
      color: "#FFF",
      fontFamily: "Montserrat_400Regular",
      fontSize: 18,
      textAlign: "center",
      paddingHorizontal: 20,
      lineHeight: 30,
      marginTop: 30,
    },
    btn: {
      marginTop: 80,
      backgroundColor: "#E2443B",
      paddingHorizontal: 140,
      paddingVertical: 10,
      borderRadius: 30,
    },
    text: {
      fontFamily: "Montserrat_700Bold",
      fontSize: 30,
      color: "#FFF",
    },
  });
