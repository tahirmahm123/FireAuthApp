import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomText({ name, value }) {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={{fontWeight: 'bold'}} >{name}</Text>
      </View>
      <View style={styles.value}>
        <Text numberOfLines={0}>{value === '' || value === null || value === undefined ?'Not Specified':value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 2,
    marginBottom: 10
  },
  name:{
    flex: 1,
    marginLeft: 3,
  },
  value:{
    flex: 1,
    marginLeft: 10,
  }
});
