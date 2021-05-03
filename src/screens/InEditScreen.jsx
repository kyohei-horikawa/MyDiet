import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { string, func, shape } from 'prop-types';

import AppBar from '../components/AppBar';
import InSubmitForm from '../components/InSubmitForm';

export default function InEdit(props) {
  return (
    <View style={styles.container}>
      <AppBar />
      <InSubmitForm />
    </View>
  );
}

InEdit.propTypes = {

};

InEdit.defaultProps = {

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
