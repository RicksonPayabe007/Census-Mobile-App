import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CensusSection3 = () => {
  const navigation = useNavigation(); // Hook for navigation

  // State to track the number of people and their names
  const [peopleCount, setPeopleCount] = useState('');
  const [peopleNames, setPeopleNames] = useState('');

  const handleContinue = () => {
    // Validation to check if both fields are filled
    if (!peopleCount || !peopleNames) {
      Alert.alert("Missing Information", "Please fill in both filleds before continue!");
      return;
    }
    
    // Navigate to the next screen when validation passes
    navigation.navigate('Personaldetails'); // Ensure 'Personaldetails' is a valid screen
  };

  return (
    <ScrollView style={styles.container}>
      {/* Image for the screen */}
      <Image
        source={require('../assets/images/CensusApp.jpg')} // Replace with the correct relative path to your image
        style={styles.images}
      />

      <Text style={styles.title}>Household Occupants Personal Details</Text>

      <Text style={styles.note}>Note: Please ensure to attempt the following questions.</Text>

      {/* Number of People */}
      <Text style={styles.label}>
        How many people (including visitors) slept here in your household on the night of (22/08/24)?
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number of people"
        keyboardType="numeric"
        value={peopleCount}
        onChangeText={setPeopleCount}
      />

      {/* Names of People */}
      <Text style={styles.label}>
        Write their names (including visitors) who slept here on that night:
      </Text>
      <TextInput
        style={styles.inputLarge}
        placeholder="Enter names here"
        value={peopleNames}
        onChangeText={setPeopleNames}
        multiline={true}
        numberOfLines={4}
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E9B666',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  note: {
    fontSize: 16,
    marginBottom: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#F7F4D4',
  },
  inputLarge: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#F7F4D4',
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#6fdfd1',
    padding: 8,
    borderRadius: 100,
    alignItems: 'center',
    width: 100,
    left: 240,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  images: {
    height: 129,
    width: 499,
    marginBottom: 20,
    borderRadius: 2,
    backgroundColor: '#E9B666',
  },
});

export default CensusSection3;
