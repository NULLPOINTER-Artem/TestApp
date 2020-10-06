import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { store } from './src/stores/stores';

import List from './src/screens/List';
import Photo from './src/screens/Photo';

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
  }

  // create children screens for navigation
  createHomeNavigator = () => 
    <Stack.Navigator>
      <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              children={this.createHomeNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
};

export default App;