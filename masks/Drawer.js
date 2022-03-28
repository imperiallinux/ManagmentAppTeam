import * as React from 'react';
import { Button, View, Text } from 'react-native';
import App1 from './Dashboard';
import TtaskBar from './GlavnaMaska';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const {stil, tamna} = Colors;

function Feed( ) {
  return (
    <View>
      <App1></App1>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Podesavanja</Text>
    </View>
  );
}

function CustomDrawerContent(props,{navigation}) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        onPress={() => navigation.navigate('Prijava')}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Glavni Meni" component={Feed} color = {stil} />
      <Drawer.Screen name="Podešavanja" component={Settings} />
    </Drawer.Navigator>
  );
}
