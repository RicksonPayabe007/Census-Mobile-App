import { useNavigation } from 'expo-router'; // Correct navigation import for expo-router
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native'; // Added Image and ScrollView import

const CensusSection2 = () => {
  // State to hold user inputs
  const [censusUnit, setCensusUnit] = useState('');
  const [anumeration, setAnumeration] = useState('');
  const [locality, setLocality] = useState('');
  const [section, setSection] = useState('');
  const [lot, setLot] = useState('');
  const [street, setStreet] = useState('');
  const [structure, setStructure] = useState(''); // Added state for Structure/Record #
  const [pd, setPD] = useState(''); // Added state for PD#

  // Access navigation using the hook
  const navigation = useNavigation();

  const handleNext = () => {
    // Validation for required fields
    if (!locality || !section || !lot || !street || !structure || !pd || !censusUnit || !anumeration) {
      Alert.alert("Missing Information", "Please fill in all the required fields.");
      return;
    }

    // If validation passes, navigate to the next screen
    navigation.navigate("occupantdetails");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* Image for the screen */}
        <Image
          source={require('../assets/images/CensusApp.jpg')} // Replace with the correct relative path to your image
          style={styles.images}
        />
        
        {/* Title */}
        <Text style={styles.title}>Household Info</Text>

        {/* Indicative Info Section */}
        <View style={styles.infoContainer}>
          {/* Locality */}
          <Text style={styles.label}>Locality:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Here"
            value={locality}
            onChangeText={setLocality}
          />
          
          {/* Section */}
          <Text style={styles.label}>Section:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Here"
            value={section}
            onChangeText={setSection}
          />

          {/* Lot */}
          <Text style={styles.label}>Lot Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Here"
            value={lot}
            onChangeText={setLot}
          />

          {/* Street */}
          <Text style={styles.label}>Street Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Here"
            value={street}
            onChangeText={setStreet}
          />

          {/* Structure/Record # Input */}
          <Text style={styles.label}>Structure/Record #:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Record #"
            value={structure}
            onChangeText={setStructure}
          />

          {/* PD# Input */}
          <Text style={styles.label}>PD#:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter PD#"
            value={pd}
            onChangeText={setPD}
          />

          {/* Census Unit Input */}
          <Text style={styles.label}>Household#:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Household#"
            value={censusUnit}
            onChangeText={setCensusUnit}
          />

          {/* Anumeration # Input */}
          <Text style={styles.label}>Anumeration #:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Anumeration #"
            value={anumeration}
            onChangeText={setAnumeration}
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, // Ensures content takes up entire scroll area
    justifyContent: 'center',
  },
  container: {
    padding: 18,
    justifyContent: 'center',
    backgroundColor: '#E9B666',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 100,
    color: '#000000',
    backgroundColor: '#F7F4D4',
  },
  button: {
    backgroundColor: '#6fdfd1',
    padding: 8,
    borderRadius: 100,
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  images: {
    height: 139,
    width: 552,
    marginBottom: 10,
    borderRadius: 2,
    backgroundColor: '#E9B666',
    right:20,
    marginTop: -16,
  },
});

export default CensusSection2;
