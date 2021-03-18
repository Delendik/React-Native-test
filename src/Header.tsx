import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Mobile App Name</Text>
      <View style={styles.headerImageContainer}>
        <Image style={styles.headerImage} source={require('./images/Shape.png')} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: 343,
    marginTop: 38,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Mulish-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: -0.2,
    color: '#010203',
  },
  headerImageContainer: {
    width: 50,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 17,
    height: 16,
    
  }
});

