import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthComponent from "@/components/auth/AuthComponent";
import { Button } from "react-native";

const authentication = () => {
  return (
    <View style={styles.container}>
      <Text>Authention</Text>
      <AuthComponent />
    </View>

  );
};


export default authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9B666",
    alignItems: "center",
    justifyContent: "center",
  },
});
