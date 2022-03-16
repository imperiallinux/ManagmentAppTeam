import React, { useState, Component } from 'react';
import  React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons } from '@expo/vector-icons';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ButtonTextDash,
    NewButton,
    ButtonGrid, 
    StyledContainerDash


} from './../components/styles';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
const dataList = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }]
const numColumns = 2

export default class App1 extends (React.Component){
    _renderItem = ({item, index}) => {
        
        const{itemStyle, itemText} = styles;
        return (
        <StyledContainerDash>
            
        <TouchableOpacity>
            <View style = {itemStyle}>
                <Text style={itemText}>{item.key}</Text>
            </View>
        </TouchableOpacity>
            
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
const styles  = StyleSheet.create({
        container: {
            paddingTop: 30 
        },
      
        itemStyle: {
          backgroundColor: '#6D28D9',
          alignItems: 'center',
          justifyContent: 'center',
          height: 150,
          flex: 1,
          borderRadius: 10,

        },
      
        itemText: { 
          color: '#fff',
          fontSize: 30
        },
        
      });
// const Dashboard = () => {
//     return (

//         <StyledContainer>
//             <StatusBar style="dark" />
//             <InnerContainer>
//                 <ButtonGrid> 
//                     <NewButton>
//                         <ButtonTextDash>
//                             Provjera
//                         </ButtonTextDash>
//                     </NewButton>
//                     <NewButton>
//                         <ButtonTextDash>
//                             Popis
//                         </ButtonTextDash>
//                     </NewButton>
//                     <NewButton>
//                         <ButtonTextDash>
//                             Provjera dokumentacije
//                         </ButtonTextDash>
//                     </NewButton>
//                     <NewButton>
//                         <ButtonTextDash>
//                             Kreiranje predracuna
//                         </ButtonTextDash>
//                     </NewButton>
//                     <NewButton>
//                         <ButtonTextDash>
//                             Prijem robe
//                         </ButtonTextDash>
//                     </NewButton>
//                     <NewButton>
//                         <ButtonTextDash>
//                             Prenos
//                         </ButtonTextDash>
//                     </NewButton>
//                 </ButtonGrid>
//             </InnerContainer>
//         </StyledContainer>

//     );
// }

// export default Dashboard;