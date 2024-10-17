import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated import
import { useNavigation } from '@react-navigation/native';

const NewPersonForm= () => {
  const navigation = useNavigation();

  // State variables for each input field
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('Own Son');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('Never Married');

  
  const handleNext= () => {
    (navigation as any).navigate("NewForm");
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Details</Text>

      {/* Name Input */}
      <Text style={styles.label}>Names:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={name}
        onChangeText={setName}
      />

      {/* Relationship Input */}
      <Text style={styles.label}>Relationship (with the occupants):</Text>
      <Picker
        selectedValue={relationship}
        style={styles.picker}
        onValueChange={(itemValue) => setRelationship(itemValue)}
      >
        <Picker.Item label="Own Son" value="Own Son" />
        <Picker.Item label="Own Daughter" value="Own Daughter" />
        <Picker.Item label="Visitor" value="Visitor" />
        <Picker.Item label="Relative" value="Relative" />
        {/* Add more options as necessary */}
      </Picker>

      {/* Gender Input */}
      <Text style={styles.label}>Gender:</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.radioButton, gender === 'Male' && styles.radioButtonSelected]}
          onPress={() => setGender('Male')}
        >
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, gender === 'Female' && styles.radioButtonSelected]}
          onPress={() => setGender('Female')}
        >
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Date of Birth Input */}
      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/YYYY"
        value={dob}
        onChangeText={setDob}
      />

      {/* Age Input */}
      <Text style={styles.label}>Age In Years:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      {/* Marital Status Input */}
      <Text style={styles.label}>Marital Status:</Text>
      <Picker
        selectedValue={maritalStatus}
        style={styles.picker}
        onValueChange={(itemValue) => setMaritalStatus(itemValue)}
      >
        <Picker.Item label="Never Married" value="Never Married" />
        <Picker.Item label="Married" value="Married" />
        <Picker.Item label="Divorced" value="Divorced" />
        <Picker.Item label="Widowed" value="Widowed" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={() => handleNext()}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

    </View>
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
  picker: {
    height: 50,
    marginBottom: 20,
    backgroundColor: '#F7F4D4',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#F7F4D4',
    marginHorizontal: 5,
  },
  radioButtonSelected: {
    backgroundColor: '#6fdfd1',
  },
  radioText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#6fdfd1',
    padding: 12,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewPersonForm;
