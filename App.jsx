import React from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import AppBar from './src/components/AppBar';
import InSubmitForm from './src/components/InSubmitForm';
import InEditScreen from './src/screens/InEditScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
