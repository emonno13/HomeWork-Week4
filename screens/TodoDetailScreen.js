import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TodoDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    const todoItem = navigation.getParam('data');
    const{
        status,
        body
    } = todoItem;
    return (
      <View style={styles.container}>
        <Text style={styles.status}> Status : {status} </Text>
        <Text style={styles.body}>Body: {body} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  headerContainer: {
    flexDirection: 'column'
  },
  status: {
    fontSize: 30
  },
  body: {
    justifyContent:'space-around',
    alignItems :'center',
    fontSize: 50
  }
})