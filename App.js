import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Kako bi se prikazale maske moraju bit importovane
import Prijava from './masks/Prijava';


export default function App() {
  return <Prijava />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
