import React from 'React';
import {createStackNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import { Platform } from 'react-native';
import TodoScreen from '../screens/TodoScreen';
import TodoDetailScreen from '../screens/TodoDetailScreen';
const TodoStack = createStackNavigator(
 {
      Todo: TodoScreen,
      TodoDetail : TodoDetailScreen
    });
  
  TodoStack.navigationOptions = {
    tabBarLabel: 'TodoList',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  };
  
  TodoStack.path = '';

  export default TodoStack;