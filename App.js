/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useContext} from 'react';
 import { Text, View, Button } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import {FirebaseContext} from './FirebaseContext';
 import {useSelector, useDispatch} from 'react-redux';
 import exemple from './Redux/Reducers/exemple';
 import {afficheExemple} from './Redux/Actions/exemple';

 function HomeScreen() {

  const {exemple} = useSelector(store => store)
  const dispatchExemple = useDispatch()

  const toggle = () => {
    dispatchExemple(afficheExemple(!exemple))
  }
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {exemple && <Text>Ceci est mon texte</Text>}
        <Button onPress={toggle}
                title="Afficher"
        />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  const context = useContext(FirebaseContext)
  console.log("context", context)

  const {exemple} = useSelector(store => store)
  console.log(exemple);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}