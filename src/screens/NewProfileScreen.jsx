import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import FormPart from '../components/FormPart';
import Button from '../components/Button';
import FooterBar from '../components/FooterBar';

export default function NewProfileScreen(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const { navigation } = props;

  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/profiles`);
      ref.add({
        firstName,
        lastName,
        height,
        weight,
        age,
      })
        .then(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  }

  return (
    <View style={styles.container}>

      <FormPart
        name="Firstname"
        val={firstName}
        setVal={setFirstName}
      />

      <FormPart
        name="Lastname"
        val={lastName}
        setVal={setLastName}
      />
      <FormPart
        name="Height"
        type="numeric"
        val={height}
        setVal={setHeight}
      />
      <FormPart
        name="Weight"
        type="numeric"
        val={weight}
        setVal={setWeight}
      />
      <FormPart
        name="Age"
        type="numeric"
        val={age}
        setVal={setAge}
      />
      <Button
        label="create!"
        style={{ alignSelf: 'center' }}
        onPress={() => {
          handlePress();
        }}
      />
      <FooterBar />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
