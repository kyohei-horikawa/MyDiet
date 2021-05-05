import React from 'react';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import InEditScreen from './src/screens/InEditScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import NewProfileScreen from './src/screens/NewProfileScreen';
import HomeScreen from './src/screens/HomeScreen';

// import { firebaseConfig } from './env';

require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyCpyXkT_b5bKZuFaZn0Aw3-ByO289z9Z9w',
  authDomain: 'mydiet-7dd0b.firebaseapp.com',
  projectId: 'mydiet-7dd0b',
  storageBucket: 'mydiet-7dd0b.appspot.com',
  messagingSenderId: '458863306475',
  appId: '1:458863306475:web:6d993f25b7e7c4db9b80ae',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NewProfile"
        screenOptions={{
          headerStyle: { backgroundColor: '#A7DF8D' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'MyDiet',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="InEdit" component={InEditScreen} />
        <Stack.Screen name="NewProfile" component={NewProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
