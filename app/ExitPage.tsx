import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const App = () => {
  const navigation = useNavigation(); // Get navigation prop

  // Function for handling the "Exit" button press
  const handleExit = () => {
    Alert.alert('Exit', 'You have exited the app.');
    // Navigate to another screen
    navigation.navigate('auth'); // Make sure 'auth' is a valid route in your navigation stack
  };

  return (
    <View style={styles.container}>
      {/* Congratulations Emoji and Time */}
      <Text style={styles.emoji}>🎉</Text>
      <Text style={styles.time}>2:43</Text>

      {/* Success Message */}
      <Text style={styles.label}>Thank You for participating in this Survey, Your Information is successfully recorded !!</Text>

      {/* Exit Button */}
      <View style={styles.buttonContainer}>
        <Button title="Exit" onPress={handleExit} color="#6fdfd1" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9B666',
  },
  emoji: {
    fontSize: 100,   // Larger font size for the emoji
    marginBottom: 20,
  },
  time: {
    fontSize: 24,   // Font size for the time
    marginBottom: 20,
    color: '#333',  // Text color
  },
  label: {
    fontSize: 22,
    marginBottom: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    width: 90,
    marginTop: 40,
    borderRadius: 100,
    alignItems: 'center',
    height:60,
  },

  
});

export default App;
