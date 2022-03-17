import React from "react";
import {TaskBar,TaskBarButton, RightButton} from "../components/styles";
import {Ionicons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
 
const taskBar = () =>{
return(
    
    <TaskBar>
        <TaskBarButton>
            <Ionicons name = "menu" size={50} color = '#fff'/>
            </TaskBarButton>
            <RightButton >
            <Ionicons name = "sync-circle-outline" size={50} color = '#fff'/>
            </RightButton>
    </TaskBar>

)
}

export default taskBar;