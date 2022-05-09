import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { headerStyles } from './Header.style';
import { Title } from './header.type'; 

export default function Header(props: Title) {
    // props.title;
    
  return (
    <View style={headerStyles.container}>
      <Text>{props.title}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FF000033',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 50,
  },
});
