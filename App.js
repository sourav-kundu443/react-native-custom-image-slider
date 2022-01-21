import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Carousel from './src/components/Carousel';

const Data = [
  {
    title: 'Anise Aroma Art Bazar',
    image: require('./src/assets/images/project3.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
  },
  {
    title: 'Food inside a Bowl',
    image: require('./src/assets/images/project2.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    title: 'Vegatable Salad',
    image: require('./src/assets/images/project4.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
  },
  {
    title: 'Vegatable Salad',
    image: require('./src/assets/images/project6.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 4,
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Carousel data={Data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default App;
