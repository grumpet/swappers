import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = (props) => {
  return (
    <Text style={styles.title}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: '10%', // position the title at 5% from the top
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});

export default Title;