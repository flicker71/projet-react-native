import { StyleSheet } from "react-native";

export const TicTacToeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    tile: {
        borderWidth: 1,
        width: 100,
        height: 100,
    },

    tileX: {
        color: "red",
        fontSize: 60,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    tileO: {
        color: "green",
        fontSize: 60,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
  });