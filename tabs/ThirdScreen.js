
import React from 'react';
import {View,Text,Button,Image,StyleSheet,ScrollView} from 'react-native';
import FirstScreenListItems from '../GridLists/FirstScreenListItems'

import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'


import GridList from 'react-native-grid-list';


const items = [
  { thumbnail: icon2},
  { thumbnail: icon1},
  { thumbnail: icon4},
  { thumbnail: icon3},
  { thumbnail: icon5},
  { thumbnail: icon6},

];



export default class ThirdScreen extends React.Component {
  static navigationOptions= {
  tabBarLable :'Tab1'
}



renderItem = ({ item, index }) => (
  <Image style={styles.image} source={item.thumbnail} />
);

render() {
  return (
    <ScrollView style={styles.container}>
      <GridList
      itemDimension={90}
        showSeparator
        data={items}
        numColumns={1}
        renderItem={this.renderItem}
      />
    </ScrollView>
  );
}



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3EBE4',
    padding: 5,
  },
  image: {

    margin:10,


    width: '90%',
    justifyContent: 'flex-end',
    borderRadius: 5,
    height: '90%',
    borderColor:'red'

  },
});
