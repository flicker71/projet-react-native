import React, { useState } from "react";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import { Board } from "./Board";
import { TicTacToeStyle } from "./TicTacToe.style";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
// import Board from "./Board";

export function TicTacToeScreen({ navigation }:any) {
    
    const [board, setBoard] = useState({
      plato :
      [ 
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
      ],
      currentPlayer: 1
    });


    const renderIcon = (row:number, col:number) => {
      let value = board.plato[row][col];
      switch(value)
      {
        case 1: return <Icon name="close" style={TicTacToeStyle.tileX} />;
        case -1: return <Icon name="circle-outline" style={TicTacToeStyle.tileO} />;
        default: return <View />;
      }
    }

    const onTilePress = (row:number, col:number) => {
      if(board.plato[row][col] === 0) {
        let currentPlayer = board.currentPlayer;

        let arr = board.plato.slice();
        arr[row][col] = currentPlayer;

        let nextPlayer = (currentPlayer == 1) ? -1 : 1;
        setBoard({ plato:arr, currentPlayer: nextPlayer})
        console.log(board.plato[0][0]);
        console.log(board.plato[0][1]);

        let winner = getWinner();
        console.log(winner);
        if (winner === 1) {
          Alert.alert("player 1 is the winner")
        }
        else if (winner === -1) {
          Alert.alert("player 2 is the winner")
        }
        // else if (winner === 0) {
        //   Alert.alert("Nobody win");
        // }
      }
    }

    const getWinner = ():number => {
      const NUM_TILES:number = 3;
      let arr = board.plato;
      let sum:number;

      //Check rows
      for (let i = 0; i < NUM_TILES; i++) {
        sum = arr[i][0] + arr[i][1] + arr[i][2];
        if (sum === 3 ) { 
          return 1;
        }
        else if (sum === -3 ) { 
          return -1;
        }
      }
      //Check column
      for (let i = 0; i < NUM_TILES; i++) {
        sum = arr[0][i] + arr[1][i] + arr[2][i];
        if (sum === 3 ) { 
          return 1;
        }
        else if (sum === -3 ) { 
          return -1;
        }
      }
      //Check diago
        sum = arr[0][0] + arr[1][1] + arr[2][2];
        if (sum === 3 ) { return 1;}
        else if (sum === -3 ) { return -1;}

        sum = arr[0][2] + arr[1][1] + arr[2][0];
        if (sum === 3 ) { return 1;}
        else if (sum === -3 ) { return -1;}

        return 0;

        // for (let i = 0; i < NUM_TILES; i++) {
        //   const isRow1Winning = board.plato[i].every((cell) => cell === 1);
        //   const isRow2Winning = board.plato[i].every((cell) => cell === -1);
        //   if(isRow1Winning) {
        //     Alert.alert("X won. Row: " + i);
        //   }
        //   if(isRow2Winning) {
        //     Alert.alert("O won. Row: " + i);
        //   }
        // }

    }
      
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {board.plato.map((row, rowIndex) => (            
            <View  style={{flexDirection: "row"}} >
              {row.map((cell, cellIndex) => (
                <TouchableOpacity onPress={() => onTilePress(rowIndex,cellIndex)}style={TicTacToeStyle.tile}>
                {renderIcon(rowIndex,cellIndex)}
              </TouchableOpacity>
              ))}
            </View>
          ))}
      <Text>TicTactoe Screen</Text>
      <Button
        title="Go to Game... again"
        onPress={() => navigation.push('TicTacToe')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}