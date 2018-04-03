import React, { Component } from 'react';
import {Text,View,AppRegistry} from 'react-native';
import App from './App';
import Header from './app/Header';
const Todo = () => {

    return(
  <Header></Header>
    );
}


AppRegistry.registerComponent('AwesomeProject', () => Todo);
