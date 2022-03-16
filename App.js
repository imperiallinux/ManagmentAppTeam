import  React from 'react';
//za navigaciju
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Kako bi se prikazale maske moraju bit importovane
import Prijava from './masks/Prijava';
import ServerPrijava from './masks/ServerPrijava';
import Dashboard from './masks/Dashboard';
import App1 from './masks/Dashboard';

//novi parametar 
const Stack = createNativeStackNavigator();

export default function App() {
  return <App1 />;g
}


//Prijava