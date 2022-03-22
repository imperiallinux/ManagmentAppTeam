import  React from 'react';
//za navigaciju
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
//Kako bi se prikazale maske moraju bit importovane
import Prijava from './masks/Prijava';
import ServerPrijava from './masks/ServerPrijava';
import App1 from './masks/Dashboard';
import GlavnaMaska from './masks/GlavnaMaska';
import TtaskBar from './masks/GlavnaMaska';

//novi parametar 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Prijava'  screenOptions={{headerShown : false}}>
        <Stack.Screen name = "Prijava" component={Prijava} />
        <Stack.Screen name = "ServerPrijava" component={ServerPrijava} />
        <Stack.Screen name = "Dashboard" component={App1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//ServerPrijava