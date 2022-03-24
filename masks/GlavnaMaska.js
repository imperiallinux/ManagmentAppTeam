import React from "react";
import {TaskBar,TaskBarButton, RightButton, MsgBox, Colors} from "../components/styles";
import {Ionicons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import App1 from "./Dashboard";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';



import Prijava from '../masks/Prijava';
import ServerPrijava from '../masks/ServerPrijava';


const {stil, tamna} = Colors;
const Drawer = createDrawerNavigator();


const TtaskBar = () =>{

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