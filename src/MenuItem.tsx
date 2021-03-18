import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface MenuItemProps {
  color: string;
  title: string;
  subtitle: string;
  imageColor: string;
  image: any;
}

const MenuItem: React.FC<MenuItemProps> = ({ color, title, subtitle, imageColor, image }) => {
  return (
    <View 
      style={{ 
        backgroundColor:`${color}`, 
        width: 343, height: 88, 
        borderRadius: 14, 
        marginTop: 16, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
      }} >
      <View style={styles.itemText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.itemImageContainer}>
        <Image style={{backgroundColor:imageColor}} source={image} />
      </View>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  itemText: {
    
  },
  title: {
    fontFamily: 'Mulish-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.1,
    color: '#354354',
  },
  subtitle: {
    fontFamily: 'Mulish-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.1,
    color: '#68727F',
    marginTop: 4,
  },
  itemImageContainer: {
    width: 72,
    height: 72,
    backgroundColor: '#D9F1E9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
  },
});