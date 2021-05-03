import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, Text,
} from 'react-native';
import { string } from 'prop-types';

export default function InSubmitFormPart(props) {
  const { name, type } = props;
  const [val, setVal] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{name}</Text>
      <TextInput
        value={val}
        onChangeText={(text) => {
          setVal(text);
        }}
        style={styles.input}
        placeholder={name}
        keyboardType={type}
      />
    </View>
  );
}

InSubmitFormPart.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    alignSelf: 'center',
  },
  Text: {
    marginRight: 10,
    width: 100,
  },
  input: {
    paddingVertical: 8,
    borderWidth: 1,
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
    width: 100,
  },
});
