import React, { useState } from 'react';
import {
  TouchableOpacity,
  View, StyleSheet, Text, TextInput,
} from 'react-native';

import AppBar from '../components/AppBar';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <AppBar />
      <Text style={styles.text}>Sign Up!</Text>
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
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>If you already SignUp, </Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>LogIn here</Text>
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
