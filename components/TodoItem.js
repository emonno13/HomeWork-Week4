import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

export default class TodoItem extends Component {

  render() {
    const {
        data: {id,body, status},
        onPressButton,
        onLongPress
    } = this.props;
    const buttonStyle = status === 'Active' ? styles.activeButton : styles.normalButton;
    return (
     
        <TouchableOpacity style={buttonStyle} onPress={onPressButton} onLongPress={onLongPress}>

      <Text style={styles.bodyText}>{id}.{body}</Text>
    
        </TouchableOpacity>
        
      
    );
  }
}

const styles = StyleSheet.create({
    activeButton: {
        backgroundColor : 'green',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        width: '95%',
        minHeight: 50,
        color: 'black',
        borderRadius: 5,
        flexWrap: 'wrap',
        marginTop : 10 
      },
      normalButton: {
        backgroundColor : 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        width: '95%',
        minHeight: 50,
        color: 'black',
        borderRadius: 5,
        flexWrap: 'wrap',
        marginTop : 10 
      },

      bodyText: {
        color : 'white',
        fontSize: 10
      }
})