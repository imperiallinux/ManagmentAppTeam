import React from "react";
import {TaskBar,TaskBarButton, RightButton, MsgBox, Colors} from "../components/styles";
import {Ionicons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import App1 from "./Dashboard";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const {stil, tamna} = Colors;
 
const TtaskBar = () =>{
<Drawer.Navigator
        screenOptions={{
            drawerStyle: {
              backgroundColor: '#c6cbef',
              width: '70%',
            },
          }}
        >
            <Drawer.Screen name="Prijava" component={Prijava} />
            <Drawer.Screen name="ServerPrijava" component={ServerPrijava} />
        </Drawer.Navigator>
return(
    
    <TaskBar>
         
        <TaskBarButton>
            <Ionicons name = "menu" size={50} color = '#6D28D9'/>
        </TaskBarButton>
        <RightButton >
            <Ionicons name = "md-sync" size={50} color = '#6D28D9'/>
        </RightButton>
        <App1></App1>
    </TaskBar>
    )
}

export default TtaskBar;