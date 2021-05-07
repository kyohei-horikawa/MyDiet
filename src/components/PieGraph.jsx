import React from 'react';
import {
  View, Dimensions, StyleSheet, Text,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { shape } from 'prop-types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PieGraph(props) {
  const { data } = props;
  const todayCal = 1200;
  const goalCal = 2000;
  const subject = 'Cal';

  const chartData = [
    {
      name: 'Get Today',
      population: todayCal / goalCal,
      color: 'hsla(0,100%,50%,.5)',
      legendFontColor: '#7F7F7F', // ラベルの色
      legendFontSize: 15, // ラベルサイズ
    },
    {
      name: 'Goal',
      population: 1 - (todayCal / goalCal),
      color: 'hsla(230,100%,50%,.5)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: 'black',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'black',
    backgroundGradientToOpacity: 0,
    color: () => 'blue',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{subject}</Text>
      <PieChart
        data={chartData}
        chartConfig={chartConfig}
        width={windowWidth * 0.99}
        height={100}
        // height={windowHeight / 4}
        accessor="population"
        bgColor="transparent"
        paddingLeft={10}
        // hasLegend={false}
      />
    </View>

  );
}

PieGraph.propTypes = {
  data: shape().isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(127, 212, 209, 0.5)',
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontSize: 32,
    lineHeight: 40,
    margin: 12,
  },
});
