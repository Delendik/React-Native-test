import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Support = () => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.button}>Support and feedback</Text>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    width: 343,
    borderRadius: 14,
    marginTop: 22,
  },
  button: {
    fontFamily: 'Mulish-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.1,
    color: '#354354',
  }
});
