import React from 'react';
import {
  View, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';

import InSubmitFormPart from './InSubmitFormPart';
import Button from './Button';

export default function InSubmitForm() {
  function onPress() {
    Alert.alert('ok');
  }
  return (
    <View style={styles.container}>
      <InSubmitFormPart name="name" type="default" />
      <InSubmitFormPart name="cal" type="numeric" />
      <InSubmitFormPart name="protain" type="numeric" />
      <InSubmitFormPart name="fat" type="numeric" />
      <InSubmitFormPart name="carbo" type="numeric" />
      <InSubmitFormPart name="vitaminC" type="numeric" />
      <Button label="OK" style={{ alignSelf: 'center' }} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
