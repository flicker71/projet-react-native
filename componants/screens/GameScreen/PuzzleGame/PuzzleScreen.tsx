import React from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { PicturePuzzle, PuzzlePieces } from "react-native-picture-puzzle";

export function PuzzleScreen({ navigation }:any) {

  const [hidden, setHidden] = React.useState<number | null>(0); // piece to obscure
  const [pieces, setPieces] = React.useState<PuzzlePieces>([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const source = React.useMemo(() => ({
    uri: 'https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/05/elon-musk-pouces-1200x800.jpeg',
  }), []);
  const renderLoading = React.useCallback((): JSX.Element => <ActivityIndicator />, []);
  const onChange = React.useCallback((nextPieces: PuzzlePieces, nextHidden: number | null): void => {
    setPieces([...nextPieces]);
    setHidden(nextHidden);
  }, [setPieces, setHidden]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PicturePuzzle
        size={400}
        pieces={pieces}
        hidden={hidden}
        onChange={onChange}
        source={source}
        renderLoading={renderLoading}
      />
      <Text>Game Screen</Text>
      <Button
        title="Go to Game... again"
        onPress={() => navigation.push('Puzzle')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );

  }
  