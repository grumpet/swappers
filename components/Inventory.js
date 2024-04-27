import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // import the Text component
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const Inventory = () => {
  return (
    <View style={styles.menu}>
      <View style={styles.iconContainer}>
      <FontAwesomeIcon name="plus" size={30} color="#000" />
        </View>
      <View style={styles.textContainer}>
      <FontAwesomeIcon name="plus" size={30} color="#000" />
            </View>
      <View style={styles.iconContainer}>
      <FontAwesomeIcon name="plus" size={30} color="#000" />
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
export default Inventory;