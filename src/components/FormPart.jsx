import React, { useState } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { string, shape } from 'prop-types';

export default function FormPart(props) {
  const { name, type, style } = props;
  const [val, setVal] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        label={name}
        value={val}
        onChangeText={(text) => {
          setVal(text);
        }}
        style={[styles.input, style]}
        placeholder={name}
        keyboardType={type}
        autoCapitalize="none"
      />
    </View>
  );
}

FormPart.propTypes = {
  name: string.isRequired,
  type: string,
  style: shape(),
};

FormPart.defaultProps = {
  type: 'default',
  style: null,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 30,
  },
});
