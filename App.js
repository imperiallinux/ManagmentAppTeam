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
<<<<<<< HEAD
  return (
      <NavigationContainer>
      </NavigationContainer>
    );
=======
<<<<<<< HEAD
  return <App1 />;

=======
  return <Prijava />;
>>>>>>> aa2c68a1b542c19a333e767a79b0089912e513bb
>>>>>>> 955df3b0aff06724a2c145efade4eeb8d7cad4cd
}


//Prijava