import React from 'react';
import {
  View, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FooterBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.footerConatainer}>
      <TouchableOpacity style={styles.icon}>
        <Feather
          name="home"
          size={56}
          color="white"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.navigate('InEdit');
        }}
      >
        <Feather name="plus-circle" size={56} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Feather name="minus-circle" size={56} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Feather name="activity" size={56} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Feather name="settings" size={56} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerConatainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#A7DF8D',
    height: 104,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    margin: 12,
  },
});
