import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export function HomeScreen({ navigation }:any) {
  
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
        <Button
          title="Go to Puzzle"
          onPress={() => navigation.navigate('Puzzle')}
        />
        <Button
          title="Go to TicTacToe"
          onPress={() => navigation.navigate('TicTacToe')}
        />
      </View>
    );
  }