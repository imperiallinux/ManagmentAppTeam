import  React from 'react';
//za navigaciju
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Kako bi se prikazale maske moraju bit importovane
import Prijava from './masks/Prijava';
import ServerPrijava from './masks/ServerPrijava';
import MyDrawer from './masks/Drawer';

//novi parametar 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Prijava'  screenOptions={{headerShown : false}}>
        <Stack.Screen name = "Prijava" component={Prijava} />
        <Stack.Screen name = "ServerPrijava" component={ServerPrijava} />
        <Stack.Screen name = "Drawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//ServerPrijava