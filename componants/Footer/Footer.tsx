import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { footerStyles } from './Footer.style';

export default function Footer() {
  return (
    <View style={footerStyles.container}>
      <Text>Footer</Text>
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
    padding: 30,
  },
});
