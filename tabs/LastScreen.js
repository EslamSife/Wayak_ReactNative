import React from 'react';
import {View,Text,Button,Image,StyleSheet} from 'react-native';
import FirstScreenListItems from '../GridLists/FirstScreenListItems'




import GridList from 'react-native-grid-list';


const items = [
  { thumbnail: {  uri: 'https://lorempixel.com/200/200/city'}},
  { thumbnail: { uri: 'https://lorempixel.com/200/200/city' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },


];



export default class  LastScreen extends React.Component {
  static navigationOptions= {
  tabBarLable :'Tab1'
}



renderItem = ({ item, index }) => (
  <Image style={styles.image} source={item.thumbnail} />
);

render() {
  return (
    <View style={styles.container}>
      <GridList
      itemDimension={130}

        showSeparator
        data={items}
        numColumns={1}
        renderItem={this.renderItem}
      />
    </View>
  );
}



// render (){
//   return <View style={
//     {
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   }
//   }>
//
//   <Text    style={{fontSize: 30}} >
//   this is tab 1
//   </Text>
//
//
//   </View>
// }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 25,
    marginRight:10,

  },
  image: {
    margin:10,
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
});
