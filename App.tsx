import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import { globalStyles } from './Styles/style';
import axios from "axios";
import { HomeScreen } from './componants/screens/HomeScreen/homeScreen';
import { DetailsScreen } from './componants/screens/DetailsScreen/DetailsScreen';
import { GameScreen } from './componants/screens/GameScreen/GameScreen';

export type AppNavigator = {
  Home : undefined,
  Details: undefined,
  Game: undefined,
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
            <Stack.Screen name="Game" component={GameScreen} />
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