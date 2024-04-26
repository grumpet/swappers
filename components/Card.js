import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300, 
    padding: 100,
    margin: 20,
    backgroundColor: 'lightblue',
    borderRadius: 10,
},
});

export default Card;