import React from 'react';
import { View, StyleSheet } from 'react-native';

import InSubmitForm from '../components/InSubmitForm';
import FooterBar from '../components/FooterBar';

export default function InEdit() {
  return (
    <View style={styles.container}>
      <InSubmitForm />
      <FooterBar />
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
