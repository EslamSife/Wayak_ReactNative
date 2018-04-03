import React from 'react';
import {TabNavigator} from 'react-navigation';
import FirstScreen from './FirstScreen';
// import SecondScreen from './SecondScreen'
// import ThirdScreen from './ThirdScreen'
// import LastScreen from './LastScreen'



var MainScreenNavigator=TabNavigator({

  HRSERVICE:{View:FirstScreen},
  Tab2:{screen:FirstScreen},
  Tab3:{screen:FirstScreen},
  Tab4:{screen:FirstScreen},
  Tab5:{screen:FirstScreen},
  Tab6:{screen:FirstScreen},
  Tab7:{screen:FirstScreen}


},




{
  tabBarPosition: 'top',
  tabBarOptions: {
    swipeEnabled: true,
    animationEnabled: true,
    scrollEnabled : true,

tabStyle: {
  backgroundColor: '#372248',
  shadowColor:'#8B4789',
 },

    labelStyle:{
      fontSize :16
    }
  }


}


);


 MainScreenNavigator.navigationOptions={
  title:"tab example"
};

export default MainScreenNavigator;
