import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View, StyleSheet, Text, TextInput, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';

export default function SignUpScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigation } = props;

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
    });

    return unsubscribe;
  }, []);

  function handlePress() {
    firebase.auth().signInWithEmailAndPassword(email, password)
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
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log In!</Text>
      <TextInput
        style={styles.input}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email Address"
        textContentType="emailAddress"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        style={styles.input}
        value={password}
        utoCapitalize="none"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Button style={{ marginLeft: 19 }} label="LogIn" onPress={handlePress} />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>If you have not SignUp, </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('SignUp');
        }}
        >
          <Text style={styles.footerLink}>SignUp here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  text: {
    marginLeft: 19,
    marginTop: 12,
    marginBottom: 12,
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  input: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    width: 300,
    marginLeft: 19,
    marginBottom: 16,
    borderWidth: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
  },
  footerContainer: {
    flexDirection: 'row',
    marginLeft: 19,
  },
  footerText: {

  },
  footerLink: {
    color: 'blue',
  },
});
