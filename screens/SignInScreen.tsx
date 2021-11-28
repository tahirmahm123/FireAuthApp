import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'components/Themed';
import { RootTabScreenProps } from 'types';

export default function SignInScreen({ navigation }: RootTabScreenProps<'SignIn'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Kuch to Chala</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
