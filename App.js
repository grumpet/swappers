import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card'; 
import Title from './components/Title';
import TinderCard from './components/SwipeCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Title>Swappers</Title>
      <TinderCard />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});