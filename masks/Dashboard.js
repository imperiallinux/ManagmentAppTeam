import React, { useState, Component } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { InnerContainer, StyledContainerDash} from '../components/styles';
import TtaskBar from './GlavnaMaska';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { ServerStyleSheet } from 'styled-components';
import Prijava from './Prijava';
import ServerPrijava from './ServerPrijava';
//za navigaciju
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

const dataList = [{ key: 'Skeniranje' ,it: 'qr-code-outline'}, { key: 'Popis', it1: 'clipboard-list' }, 
{ key: 'Provjera dokumenta',it1: 'clipboard-check' }, ,{ key: 'Kreiranje predračuna' , it1: 'file-invoice-dollar'},
{ key: 'Prijem robe',it1:'cubes' }, { key: 'Prenos', it1: 'truck'}]
const numColumns = 2
const styles  = StyleSheet.create({
        container: {
            paddingTop: 12,
            paddingBottom: 50,
        },
      
        itemStyle: {
          backgroundColor: '#6D28D9',
          alignItems: 'center',
          justifyContent: 'center',
          height: 150, 
          flex: 1,
          borderRadius: 7,

        },
      
        itemText: { 
          color: '#fff',
          fontSize: 20,
          textAlign: 'center',
          justifyContent: 'center',
        },
      });

function MyDrawer ({navigation}){
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
}
const Drawer = createDrawerNavigator();
export default class App1 extends React.Component{

    _renderItem = ({item, index}) => {
        
        const{itemStyle, itemText} = styles;
        return (
        <StyledContainerDash>
            <ScrollView>
        <TouchableOpacity>
            <View style = {itemStyle}>
                <Text style={itemText}>
                    <Ionicons name = {item.it} size={70} color = '#fff' onPress={() => navigation.navigate('Prijava')} title="LogOut"/>
                    <FontAwesome5 name = {item.it1} size={70} color = '#fff'/>
                </Text>
                <Text style={itemText}>{item.key}</Text>
            </View>
        </TouchableOpacity>
        </ScrollView>
        </StyledContainerDash>
       
        )
    }

    render() {

        const {container, itemText} = styles;
        return(
            <View style = {container}>
            <FlatList 
            data = {dataList}
            renderItem = {this._renderItem}
            keyExtractor = {(item, index) => index.toString()}
            numColumns = {numColumns}
            />
        </View>
        )
    }   
}