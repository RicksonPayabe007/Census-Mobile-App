import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert, // Import Alert
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";

const AuthComponent = () => {
  const navigation = useNavigation(); // Hook for navigation

  // State to track form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // State to track which form is displayed (Sign In or Sign Up)
  const [isSignIn, setIsSignIn] = useState(true);

  // Switch between Sign In and Sign Up form
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignIn = () => {
    // Validation check for empty fields
    if (!email || !password || (!isSignIn && !confirmPassword)) {
      Alert.alert("Missing Information", "Please confirm your password.");
      return;
    }
    
    // Check if passwords match in the Sign Up form
    if (!isSignIn && password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match. Please try again.");
      return;
    }

    // Navigate to the next screen if validation passes
    (navigation as any).navigate("IndicativeInfo");
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.headerText}>
        {isSignIn ? "Sign In to Your Account" : "Create a New Account"}
      </Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail} // Set email state
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword} // Set password state
      />

      {/* Confirm Password for Sign Up */}
      {!isSignIn && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={setConfirmPassword} // Set confirm password state
        />
      )}

      {/* Action Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>{isSignIn ? "Sign In" : "Sign Up"}</Text>
      </TouchableOpacity>

      {/* Toggle between forms */}
      <TouchableOpacity onPress={toggleForm}>
        <Text style={styles.toggleText}>
          {isSignIn
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Modern styling for the form
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2", // Light background for a clean look
    borderRadius: 20,
    width: "100%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Dark text for contrast
    marginBottom: 40, // Space between header and form
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#fff", // White background for inputs
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Elevation for Android shadow
  },
  button: {
    backgroundColor: "#4CAF50", // Green for action button
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 80,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  toggleText: {
    color: "#2196F3", // Blue link for toggling between forms
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
  },
});

export default AuthComponent;
