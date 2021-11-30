import React, {
  useEffect,
  useState,
  useContext
} from 'react';
import {
  Text,
  View,
  Switch,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  Picker,
} from 'react-native';
import {
  TextInput,
  Button,
  ActivityIndicator,
  Colors,
} from 'react-native-paper';
import { parse } from 'fast-xml-parser';
import CustomText from '../components/custom-text';
import { HardCodedKeys, ObjectKeys, Ignore } from '../utils/dictionary';
import RenderSearchDetails from '../components/render-item-details';
import Input from '../components/custom-input';
import DropDown from '../components/DropDown';
import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

const auth = Firebase.auth();


export default function App() {
  const [country, setCountry] = useState('United Kingdom');
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [search, setSearch] = useState({
    RegistrationNumber: 'YY07XHH',
    state: '',
    district: '',
    username: 'hanzi3',
  });

  const options = [
    { key: '', section: true, label: 'Press to select a country' },
    { key: 'Australia', label: 'Australia' },
    { key: 'Pakistan', label: 'Pakistan' },
    { key: 'United Kingdom', label: 'UnitedKingdom' },
  ];

  const url = `https://www.regcheck.org.uk/api/reg.asmx/Check${country === 'United Kingdom' ? '' : country}?`;
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  const flatObject = (data, all) => {
    var keys = Object.keys(data);
    keys.forEach(value => {
      if(!Ignore.includes(value)){
        if(typeof(data[value]) == "object") {
          if(ObjectKeys.includes(value)){
            all.push({key: value, value: data[value].CurrentTextValue});
          } else {
            flatObject(data[value], all);
          }
        }else{
            all.push({key: value, value: data[value]});
        }
      }
    });
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      setData({});
      let params = Object.keys(search)
        .map(function (k) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(search[k]);
        })
        .join('&');
      const response = await fetch(url + params);
      const xml = await response.text();
      const json = parse(xml);
      if (json !== undefined && json !== null && json !== '') {
        const vehicle = JSON.parse(json.Vehicle.vehicleJson);
        var all = [];
        await flatObject(vehicle, all);
        setData(all);
      } else {
        alert(xml);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (name, text) => {
    setSearch({ ...search, [name]: text });
  };

  return (
    <View style={styles.container}>
      
      < View style={styles.row} >
        <Text style={styles.title}>Welcome {user.email}!</Text>
        <IconButton
          name='logout'
          size={24}
          color='#000'
          onPress={handleSignOut}
        />
      </View>

      {/*title*/}
      <Text style={styles.modalTitle}>Search Car</Text>
      
      {/*Custom DropDown*/}
      <DropDown data={options} setCountry={setCountry} />

      {/*Country Selected*/}
      <Text style={{ fontSize: 16, marginTop: 10, textAlign: 'center' }}>
        Country: {country}
      </Text>

      {/*Render Input form according to country*/}
      <Input value={search} setValue={handleSearch} country={country} />

      {/*Search Button*/}  
      <Button
        mode="contained"
        color="#2C2891"
        style={styles.button}
        onPress={() => fetchData()}>
        Search
      </Button>

      {/*Loader Indicator*/}
      {isLoading && (
        <ActivityIndicator animating={true} color={Colors.blue900} />
      )}
      {/*Details based Upon searched data*/}
      {
        data.length > 0 && (
          <RenderSearchDetails details={data} />
        )
      }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    justifyContent: 'center',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  button: {
    marginTop: 2,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    marginBottom: 2,
    padding: 2,
    borderRadius: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000'
  },
  image: {
    width: 66,
    height: 58,
  },
});

// import { StatusBar } from 'expo-status-bar';
// import React, { useContext } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import { IconButton } from '../components';
// import Firebase from '../config/firebase';
// import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

// const auth = Firebase.auth();

// export default function HomeScreen() {
//   const { user } = useContext(AuthenticatedUserContext);
//   const handleSignOut = async () => {
//     try {
//       await auth.signOut();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <StatusBar style='dark-content' />
//       <View style={styles.row}>
//         <Text style={styles.title}>Welcome {user.email}!</Text>
//         <IconButton
//           name='logout'
//           size={24}
//           color='#fff'
//           onPress={handleSignOut}
//         />
//       </View>
//       <Text style={styles.text}>Your UID is: {user.uid} </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e93b81',
//     paddingTop: 50,
//     paddingHorizontal: 12
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 24
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#fff'
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: 'normal',
//     color: '#fff'
//   }
// });
