import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import 'react-native-gesture-handler';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxstore from './Redux/store';

const Stack = createStackNavigator();
export default function App() {
  const {store, persistor} = reduxstore();
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="First" component={FirstScreen} />
            <Stack.Screen name="Second" component={SecondScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </StoreProvider>
  );
}
