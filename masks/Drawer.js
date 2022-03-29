import * as React from 'react';
import { Button, View, Text } from 'react-native';
import App1 from './Dashboard';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Colors} from "../components/styles";
import Prijava from './Prijava';
import ServerPrijava from './ServerPrijava'
import { useNavigation } from '@react-navigation/native';
import {Octicons,Ionicons} from '@expo/vector-icons';

const {stil, tamna} = Colors;

function Feed() {
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

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={({ focused, color, size }) => 
        <Ionicons color={focused ? '#6D28D9' : '#D7B8F0'} size={size} name={'ios-log-out'} /> }
        label="Odjavi se"
        onPress = {()=> navigation.navigate("Prijava")}
        inactiveTintColor='#6D28D9'
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor:"#B828FF",
        drawerInactiveTintColor:"#6D28D9"
      }}
    >
      <Drawer.Screen name="Glavni Meni" component={Feed}  drawerActiveTintColor={'red'}
      options={{
        drawerIcon: ({focused, size}) => (
        <Ionicons
          name="md-bookmarks"
          size={size}
          color={focused ? '#6D28D9' : '#D7B8F0'}
        />
        ),
      }}
      />
      <Drawer.Screen name="Podešavanja" component={Settings}
        options={{
          drawerIcon: ({focused, size}) => (
          <Ionicons
            name="settings"
            size={size}
            color={focused ? '#6D28D9' : '#D7B8F0'}
          />
          ),
          color : 'red',
        }}
      />
      
    </Drawer.Navigator>
  );
}
