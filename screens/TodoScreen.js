import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,TextInput,Button,Alert,KeyboardAvoidingView,ImageBackground } from 'react-native';
import {TODOS} from '../constants/Utils'
import TodoItem from '../components/TodoItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class TodoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList : TODOS,
      inputText:''
    };
  }

  onChange = text =>{
    this.setState({
      inputText : text
    })
  };

  onSubmit = () =>{
    const{todoList} = this.state;
    const newTodoItem = {
      body: this.state.inputText,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodoItem];
    this.setState({
      todoList : newTodoList,
      inputText: ''
    })
  };

  onConfirmDelete = id =>{
    const {todoList} = this.state;
    const newTodoList = todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList : newTodoList
    })
  }

  onLongPressTodoItem = todo =>{
  
    Alert.alert(
      'Delete your todo?',
      todo.body,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.onConfirmDelete(todo.id) }
      ],
      { cancelable: true }
    );
  };
  onPressTodoItem = id =>{
    const {todoList} = this.state; 
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    this.setState({
      todoList : newTodoList
    }, ()=>{
      setTimeout(()=>{
        this.props.navigation.navigate('TodoDetail',{data : todo});},2000);
    }
    )
  };
  render() {
    const {todoList,inputText} = this.state;
    return (

      <ImageBackground style={styles.container} 
      source={{uri: "https://i.pinimg.com/originals/27/c4/30/27c4306e82545b1040b6f544998c8645.jpg"}}>
      <KeyboardAvoidingView
            enabled
            behavior="padding"
            style={styles.keyboard}
        >
      <ScrollView style={{flex:1}}>
      <View style={{marginTop: "100%"}}>
      {
         todoList.map(item =>{
           return <TodoItem 
           style={styles.todoItem}
           data={item} 
           onPressButton={()=>this.onPressTodoItem(item.id)} 
           onLongPress ={()=>this.onLongPressTodoItem(item)} 
           />
         })
       }
      </View>
       <View style={styles.inputContainer}>
       <TextInput style={styles.todoInput} onChangeText={this.onChange} value={inputText}/>
       </View>

       <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
       <TouchableOpacity style={styles.button}>
       <Button title="Submit" onPress={this.onSubmit} style={styles.buttonText}/>
       </TouchableOpacity>
       </View>
       
        
      </ScrollView>
      </KeyboardAvoidingView>
      </ImageBackground>
      
    );
  }
}


//////////////////
const styles = StyleSheet.create({
  container: {
    flex :1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
    marginHorizontal: 15 
  },
  inputContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  todoInput: {
    width: '90%',
    height: 30,
    color: 'white',
    borderWidth: 1,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'grey',
    borderWidth :5
  },
  button:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    borderRadius: 10,
   
   
  },
  buttonText: {
    color: 'white',
    width: 100,
    fontSize: 5,
    fontWeight: 'bold',
    
  },
  todoItem: {
    margin: 5,
    padding: 10,
    minHeight: 100,
    width: '95%',
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
 keyboard:
 {
   flex:1,
   flexDirection:"column",
   justifyContent:"center"
 }
});