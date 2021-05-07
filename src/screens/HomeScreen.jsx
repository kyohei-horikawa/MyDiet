import React, { useEffect, useState } from 'react';
import {
  ScrollView, Text, StyleSheet, View,
} from 'react-native';
import firebase from 'firebase';

import FooterBar from '../components/FooterBar';
import PieGraph from '../components/PieGraph';

export default function HomeScreen() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    height: '',
    weight: '',
    age: '',
  });

  const [todayCal, setTodayCal] = useState(0);
  const [goalCal, setGoalCal] = useState(0);

  useEffect(() => {
    setTodayCal(1200);
    setGoalCal(2000);
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/profiles`);
      unsubscribe = ref.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          setUserData({
            firstName: data.firstName,
            lastName: data.lastName,
            height: data.height,
            weight: data.weight,
            age: data.age,
          });
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <PieGraph />
        <PieGraph />
        <PieGraph />
        <PieGraph />
        <View style={styles.bottom} />
      </ScrollView>
      <FooterBar />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  bottom: {
    height: 100,
    // グラフの下部がきれないように
  },
});
