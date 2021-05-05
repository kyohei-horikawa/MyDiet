import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FooterBar from '../components/FooterBar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>ok</Text>
      <FooterBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
