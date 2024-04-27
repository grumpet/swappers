import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card'; 
import Title from './components/Title';
import TinderCard from './components/SwipeCard';
import Menu from './components/Menu';
import Inventory from './components/Inventory';
import Profile from './pages/Profile'; 



export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
      <Inventory />
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
