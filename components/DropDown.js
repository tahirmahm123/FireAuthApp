import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

export default function DropDown({ data, setCountry }) {
  return (
    <View style={styles.container}>
      <ModalSelector
        data={data}
        animationType='fade'
        style={{height: 40}}
        onChange={(option) => {
          setCountry(option.key);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
