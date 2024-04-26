import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // import the Text component
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const Menu = () => {
  return (
    <View style={styles.menu}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon name="user" size={30} color="#000" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>swappers</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="settings" size={30} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Change this line
    padding: 10,
    width: '100%',
    marginTop: 30,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Menu;