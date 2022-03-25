import React from "react";
import {TaskBar,TaskBarButton, RightButton, MsgBox, Colors} from "../components/styles";
import {Ionicons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import App1 from "./Dashboard";
import { ScrollView } from "react-native-gesture-handler";

const {stil, tamna} = Colors;

const TtaskBar = () =>{
return(  
    <TaskBar>
        <TaskBarButton>
            <Ionicons name = "menu" size={50} color = {stil}/>
        </TaskBarButton>
        <RightButton >
            <Ionicons name = "md-sync" size={50} color = {stil}/>
        </RightButton>
        <App1></App1>
    </TaskBar>
    )
}

export default TtaskBar;