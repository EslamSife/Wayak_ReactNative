import React, { PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import GridList from 'react-native-grid-list';


const items = [
  { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/city' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },
];



export default class FirstScreenListItems extends PureComponent {
  renderItem = ({ item, index }) => (
    <Image style={styles.image} source={item.thumbnail} />
  );

  render() {
    return (
      <View style={styles.container}>
        <GridList
          showSeparator
          data={items}
          numColumns={3}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
