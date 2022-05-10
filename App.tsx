import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import { globalStyles } from './Styles/style';
import axios from "axios";




export type AppNavigator = {
  Home : undefined,
  Details: undefined
}  

function HomeScreen({ navigation }:any) {
  
  const [dessert, setDessert] = useState([]);

  
  useEffect(() => {
    (async () => {
      const data = await axios.get("https://random-data-api.com/api/dessert/random_dessert?size=10")
      setDessert(data.data)
    })()
  }, []);
console.log(dessert);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      
      <Text>Home Screen {dessert && dessert[0] && dessert[0].flavor}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createNativeStackNavigator<AppNavigator>();

export default function App() {
  
  
  const [headerName, setHeaderName] = useState<string>('Header');

  const changerHeaderName = ((title:string) => {
    setHeaderName( title );
  })

  
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }

//   return (
//     <View style={globalStyles.container}>
//       {/* <Header title={headerName}/>
//       <Text>Metro - boulot - dodo</Text>
//       <Button title='Accueil' onPress={() => changerHeaderName('Accueil')}/>
//       <Button title='Autres' onPress={() => changerHeaderName('Autres')}/>
//       <StatusBar style="auto" />
//       <Footer/> */}
    
//       <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//       </NavigationContainer>
//     </View>

//   );
// }