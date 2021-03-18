import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './src/Header';
import Support from './src/Support';
import MenuItem from './src/MenuItem';
import statistic from './src/images/statistic.png';
import checklist from './src/images/checklist.png';
import training from './src/images/training.png';
import fragenliste from './src/images/fragenliste.png';
import prufung from './src/images/prufung.png';

export default function App() {
  const [loaded] = useFonts({
    'Mulish-Regular': require('./assets/fonts/Mulish-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  } else{
    return (
      <View style={styles.container}>
        <Header />
        <Support />
        <MenuItem color='#CEEFE4' title='Statistik' subtitle='Dir Deinen Lernfortschritt' imageColor='#D9F1E9' image={statistic} />
        <MenuItem color='#F2E9E1' title='Checkliste' subtitle='Alle Schritte zum Führerschein' imageColor='#F4EDE7' image={checklist} />
        <MenuItem color='#FDDADD' title='Training' subtitle='Schritt für Schritt' imageColor='#FFDEE1' image={training} />
        <MenuItem color='#BDEDFC' title='Fragenliste' subtitle='Alle Fragen auf einen Blick' imageColor='#C5EFFC' image={fragenliste} />
        <MenuItem color='#DFEEFF' title='Prüfung' subtitle='Offizielle Prüfungssimulation' imageColor='#E5F1FF' image={prufung} />
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F9',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
