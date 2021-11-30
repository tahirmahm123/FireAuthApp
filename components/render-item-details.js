import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import CustomText from './custom-text';
import {
  HardCodedKeys,
  HardCodeText,
  Ignore,
  ObjectKeys,
} from '../utils/dictionary';

const CheckImageURL = ({ url }) => {
  const [URI, setURI] = useState(url);

  useEffect(() => {
    (async () => {
      await fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <400) {
          setURI(url);
        }else{
          setURI(
            'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png'
          );  
        }
      })
      .catch((err) => {
        setURI(
          'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png'
        );
      });
    })()
  }, []);

  return (
    <Image
      source={{
        uri: URI,
      }}
      resizeMode="contain"
      style={{ width: 250, height: 250 }}
    />
  );
};

export default function RenderSearchDetails({ details }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={details}
        renderItem={({ item: { key, value } }) => {
          return (
            key == "ImageUrl" ? 
              <View style={{ alignItems: 'center' }}>
                <CheckImageURL url={value} />
              </View>
            :
            <View>
              <CustomText name={HardCodeText[key]} value={value} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
});
