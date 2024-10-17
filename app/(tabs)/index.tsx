import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  View,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AuthComponent from "@/components/auth/AuthComponent";
import React from "react";


export default function HomeScreen() {
  const navigation = useNavigation();
  

  const handleDashboard = () => {
    // code to handle the browse action
    (navigation as any).navigate("dashboard");
  };

  

  const handleGetStarted = () => {
    (navigation as any).navigate("auth");
  };

  const testRoute = () => {
    (navigation as any).navigate("test");
  };

  
    return (
      <View style={styles.container}>
        {/* Insert the logo image at the top */}
        <Image
          source={require('@/assets/images/CensusApp.jpg')} // Change to your logo's local path or use a remote URL
          style={styles.CensusApp}
        />
  
        {/* Text Messages */}
        <Text style={styles.headerText}>PNG Civil Registry Portal</Text>
        <Text style={styles.subText}>
          Welcome On Board!
        </Text>

        <Image
          source={require('@/assets/images/screen.webp')} // Change to your logo's local path or use a remote URL
          style={styles.App}
        />

  
        {/* <TouchableOpacity style={styles.button} onPress={() => handleDashboard()}>
          <Text style={styles.buttonText}>Data Entry</Text>
        </TouchableOpacity> */}

<Text style={styles.label}>"Self Administered Questionaire (SAQ) for Private dwellings"</Text>
  

        <TouchableOpacity style={styles.button} onPress={() => handleGetStarted()}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

       
       
      </View>
    );
  };



// Styling for a modern, attractive layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E9B666", // Light background for contrast against buttons
  },

  
  
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30, // Space between text and buttons
  },
  button: {
    backgroundColor: "#4CAF50", // Modern green color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 70,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonSecondary: {
    backgroundColor: "#2196F3", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  label: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    left:2,
  },

App:{
  width:250,
  height:250,
  marginBottom:20,
  borderRadius:20,
},

  

  CensusApp: {
    backgroundColor:"#E9B666",
    borderRadius:9,
    marginBottom:20,
    marginTop:-37,
    marginRight:0,
    color:"transparent",
    height:120,
    width:380,

  }

});
