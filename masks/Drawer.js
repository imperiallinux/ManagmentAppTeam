import * as React from 'react';
import { Button, View, Text } from 'react-native';
import App1 from './Dashboard';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
<<<<<<< HEAD

const {stil, tamna} = Colors;

function Feed( ) {
=======
import { Octicons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import {Colors} from "../components/styles";
import Prijava from './Prijava';

const {stil, tamna} = Colors;

function Feed({ navigation }) {
>>>>>>> 0af222bafc66cab87abb5733d5ad425f209617a4
  return (
    <View color = {tamna}>
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
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
<<<<<<< HEAD
      <Drawer.Screen name="Glavni Meni" component={Feed} color = {stil} />
=======
      <Drawer.Screen name="Glavni Meni" component={Feed} color = {stil}/>
>>>>>>> 0af222bafc66cab87abb5733d5ad425f209617a4
      <Drawer.Screen name="Podešavanja" component={Settings} />
    </Drawer.Navigator>
  );
}
