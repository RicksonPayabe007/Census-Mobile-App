import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';



const PersonalDetailsForm = () => {
  const navigation = useNavigation();

  // Initial form state template
  const initialFormState = {
    name: '',
    relationship: '',
    gender: '',
    dob: '',
    age: '',
    maritalStatus: 'Never Married',
  };

  // State to manage multiple forms
  const [forms, setForms] = useState([initialFormState]);

  // Handle input changes for a specific form
  const handleInputChange = (index, key, value) => {
    const updatedForms = [...forms];
    updatedForms[index][key] = value;
    setForms(updatedForms);
  };

  // Add a new empty form
  const addNewForm = () => {
    setForms([...forms, { ...initialFormState }]);
  };

  // Handle form submission with validation
  const handleSubmit = () => {
    // Check if all fields are filled
    for (let form of forms) {
      if (!form.name || !form.relationship || !form.gender || !form.dob || !form.age) {
        Alert.alert("Incomplete Form", "Please fill in all the fields before continuing.");
        return; // Stop submission if validation fails
      }
    }

    // If all fields are filled, proceed with submission
    console.log(forms); // You can process or send form data as needed

    // Pop-up Alert after successful form submission
    Alert.alert(
      "Success",
      "Your form has been successfully submitted.",
      [
        { text: "OK", onPress: () => navigation.navigate("ExitPage") }
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container}>
      {forms.map((form, index) => (
        <View key={index} style={styles.form}>
          <Text style={styles.title}>Personal Details</Text>

          <Text style={styles.label}>Names:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Full Name"
            value={form.name}
            onChangeText={(value) => handleInputChange(index, 'name', value)}
          />

          <Text style={styles.label}>Relationship (with the occupants):</Text>
          <Picker
            selectedValue={form.relationship}
            style={styles.picker}
            onValueChange={(itemValue) => handleInputChange(index, 'relationship', itemValue)}
          >
            <Picker.Item label="Head of Household" value="Head of Household" />
            <Picker.Item label="Own Son" value="Own Son" />
            <Picker.Item label="Own Daughter" value="Own Daughter" />
            <Picker.Item label="Visitor" value="Visitor" />
            <Picker.Item label="Relative" value="Relative" />
            <Picker.Item label="Husband/Wife" value="Husband/Wife" />
            
          </Picker>

          <Text style={styles.label}>Gender:</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.radioButton, form.gender === 'Male' && styles.radioButtonSelected]}
              onPress={() => handleInputChange(index, 'gender', 'Male')}
            >
              <Text style={styles.radioText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, form.gender === 'Female' && styles.radioButtonSelected]}
              onPress={() => handleInputChange(index, 'gender', 'Female')}
            >
              <Text style={styles.radioText}>Female</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Date of Birth:</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            value={form.dob}
            onChangeText={(value) => handleInputChange(index, 'dob', value)}
          />

          <Text style={styles.label}>Age In Years:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Age"
            keyboardType="numeric"
            value={form.age}
            onChangeText={(value) => handleInputChange(index, 'age', value)}
          />

          <Text style={styles.label}>Marital Status:</Text>
          <Picker
            selectedValue={form.maritalStatus}
            style={styles.picker}
            onValueChange={(itemValue) => handleInputChange(index, 'maritalStatus', itemValue)}
          >
            <Picker.Item label="Never Married" value="Never Married" />
            <Picker.Item label="Married" value="Married" />
            <Picker.Item label="Divorced" value="Divorced" />
            <Picker.Item label="Widowed" value="Widowed" />
            <Picker.Item label="Single" value="Single" />
            <Picker.Item label="Seperated" value="Seperated" />
          </Picker>
        </View>
      ))}

      <Text style={styles.label}>
        "If your household has more than one occupant, click on add new form for Personal Details."
      </Text>
      <TouchableOpacity style={styles.addButton} onPress={addNewForm}>
        <Text style={styles.buttonText}>Add New Form</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
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
  form: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: 'bold',
    left: 2,
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
  addButton: {
    backgroundColor: '#6fdfd1',
    padding: 12,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PersonalDetailsForm;
