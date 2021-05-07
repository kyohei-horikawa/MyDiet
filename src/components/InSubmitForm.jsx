import React from 'react';
import {
  View, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';

import FormPart from './FormPart';
import Button from './Button';

export default function InSubmitForm() {
  function onPress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser}/`);
    }
    Alert.alert('ok');
  }
  return (
    <View style={styles.container}>
      <FormPart name="name" type="default" />
      <FormPart name="cal" type="numeric" />
      <FormPart name="protain" type="numeric" />
      <FormPart name="fat" type="numeric" />
      <FormPart name="carbo" type="numeric" />
      <FormPart name="vitaminC" type="numeric" />
      <Button label="OK" style={{ alignSelf: 'center' }} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
