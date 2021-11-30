import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Input({ value, setValue, country }) {
  return (
    <View style={styles.container}>
       <TextInput
          label="Car Registration"
          value={value.RegistrationNumber}
          style={{ height: 35, marginBottom: 5,marginTop:5 }}
          mode="outlined"
          onChangeText={(text) => setValue("RegistrationNumber",text)}
        />
        {(country === 'Pakistan' || country === 'Australia') && <TextInput
          label="State"
          value={value.state}
          style={{ height: 35, marginBottom: 5,marginTop:5 }}
          mode="outlined"
          onChangeText={(text) => setValue("state", text.toUpperCase())}
        /> }
        {(country === 'Pakistan') && <TextInput
          label="District"
          value={value.district}
          style={{ height: 35, marginBottom: 5,marginTop:5 }}
          mode="outlined"
          onChangeText={(text) => setValue("district", text.toUpperCase())}
        />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});
