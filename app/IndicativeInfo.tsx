import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'; // Ensure this is installed

const CensusSection1 = () => {
  // State to hold user inputs
  const [censusUnit, setCensusUnit] = useState('');
  const [anumeration, setAnumeration] = useState('');
  const [citizenship, setCitizenship] = useState('PNG Citizen'); // Added state for citizenship
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [llg, setLLG] = useState('');
  const [ward, setWard] = useState('');

  // State to manage the records
  const [record, setRecord] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Access navigation using the hook
  const navigation = useNavigation();

  const handleNext = () => {
    // Validation for required fields
    if (!province || !district || !llg || !ward || !censusUnit || !anumeration) {
      Alert.alert("Missing Information", "Please fill in all the required fields.");
      return;
    }

    // Save the data to the record state
    setRecord({
      censusUnit,
      anumeration,
      citizenship,
      province,
      district,
      llg,
      ward,
    });
    setIsEditing(false); // Reset editing state

    // Optionally navigate to the next screen
    navigation.navigate('householdInfo');
  };

  // Function to handle updating the record
  const handleUpdate = () => {
    if (!province || !district || !llg || !ward || !censusUnit || !anumeration) {
      Alert.alert("Missing Information", "Please fill in all the required fields.");
      return;
    }

    setRecord({
      censusUnit,
      anumeration,
      citizenship,
      province,
      district,
      llg,
      ward,
    });
    setIsEditing(false); // Reset editing state
  };

  // Function to handle deleting the record
  const handleDelete = () => {
    setRecord(null);
    setIsEditing(false); // Reset editing state
    setCensusUnit('');
    setAnumeration('');
    setCitizenship('PNG Citizen');
    setProvince('');
    setDistrict('');
    setLLG('');
    setWard('');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Indicative Info Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Indicative Information</Text>

        {/* Citizenship */}
        <Text style={styles.label}>Citizenship:</Text>
        <Picker
          selectedValue={citizenship}
          style={styles.picker}
          onValueChange={(itemValue) => setCitizenship(itemValue)} // Directly updating state
        >
          <Picker.Item label="PNG Citizen" value="PNG Citizen" />
          <Picker.Item label="Foreigner" value="Foreigner" />
          <Picker.Item label="Others" value="Others" />
        </Picker>

        {/* Province */}
        <Text style={styles.label}>Province:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Province"
          value={province}
          onChangeText={setProvince}
        />

        {/* District */}
        <Text style={styles.label}>District:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your District"
          value={district}
          onChangeText={setDistrict}
        />

        {/* LLG */}
        <Text style={styles.label}>LLG:</Text>
        <TextInput
          style={styles.input}
          placeholder="Write Your LLG"
          value={llg}
          onChangeText={setLLG}
        />

        {/* Ward */}
        <Text style={styles.label}>Ward:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Ward"
          value={ward}
          onChangeText={setWard}
        />

        {/* Census Unit Input */}
        <Text style={styles.label}>Census Unit:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Census Unit"
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

      {/* Display Record Section */}
      {record && (
        <View style={styles.recordContainer}>
          <Text style={styles.recordTitle}>Record Details:</Text>
          <Text style={styles.recordText}>Census Unit: {record.censusUnit}</Text>
          <Text style={styles.recordText}>Anumeration #: {record.anumeration}</Text>
          <Text style={styles.recordText}>Citizenship: {record.citizenship}</Text>
          <Text style={styles.recordText}>Province: {record.province}</Text>
          <Text style={styles.recordText}>District: {record.district}</Text>
          <Text style={styles.recordText}>LLG: {record.llg}</Text>
          <Text style={styles.recordText}>Ward: {record.ward}</Text>

          {/* Update and Delete Buttons */}
          <View style={styles.updateDeleteContainer}>
            <TouchableOpacity style={styles.updateButton} onPress={() => setIsEditing(true)}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}


    </ScrollView>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E9B666',
  },
  title: {
    fontSize: 18,
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
  picker: {
    height: 50,
    marginBottom: 20,
    backgroundColor: '#F7F4D4',
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 100,
    color: '#000',
    backgroundColor: '#F7F4D4',
  },
  button: {
    backgroundColor: '#6fdfd1',
    padding: 8,
    borderRadius: 100,
    alignItems: 'center',
    width: 100,
    alignSelf: 'center',
    left: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recordContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom:29,
  },
  recordTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  recordText: {
    fontSize: 16,
    marginVertical: 2,
  },
  updateDeleteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: '#f5a623',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
 
});

export default CensusSection1;
