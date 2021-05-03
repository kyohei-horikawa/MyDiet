import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from './src/components/AppBar';
import InSubmitForm from './src/components/InSubmitForm';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <InSubmitForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
