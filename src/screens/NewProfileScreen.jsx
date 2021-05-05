import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

import FormPart from '../components/FormPart';
import Button from '../components/Button';
import FooterBar from '../components/FooterBar';

export default function NewProfileScreen(props) {
  const [checked, setChecked] = useState('first');
  const { navigation } = props;

  return (
    <View style={styles.container}>

      <FormPart
        name="Firstname"
      />

      <FormPart
        name="Lastname"
      />
      <FormPart name="Height" type="numeric" />
      <FormPart name="Weight" type="numeric" />
      <FormPart name="Age" type="numeric" />
      <Button
        label="create!"
        style={{ alignSelf: 'center' }}
        onPress={() => {
          navigation.navigate('Home');
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
