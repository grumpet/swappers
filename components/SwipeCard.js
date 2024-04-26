import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

const TinderCard = (props) => {
  const cards = [
    { text: "Card 1", uri: require('../assets/a.png') },
    { text: "Card 2", uri: require('../assets/a.png') },
    { text: "Card 3", uri: require('../assets/a.png') },
  ];

  const renderCard = (card) => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={card.uri} />
        <Text style={styles.text}>{card.text}</Text>
      </View>
    );
  };

  const handleYup = (card) => {
    console.log(`Yup for ${card.text}`);
  };

  const handleNope = (card) => {
    console.log(`Nope for ${card.text}`);
  };

  return (
    <SwipeCards
      cards={cards}
      renderCard={renderCard}
      handleYup={handleYup}
      handleNope={handleNope}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    flex: 1,
    marginTop: "-50%",
    alignItems: 'center',
    width: 300,
    height: 500,
  },

  text: {
    fontSize: 20,
    paddingTop: 10,
  },
});

export default TinderCard;