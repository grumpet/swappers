import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // import the Icon component

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Icon name="home" size={30} color="#000" />
      <Icon name="search" size={30} color="#000" />
      <Icon name="settings" size={30} color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row', // align children horizontally
    justifyContent: 'space-around', // distribute children evenly along the horizontal axis
    padding: 10,
  },
});

export default Menu;