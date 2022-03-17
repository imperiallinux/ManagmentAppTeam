import React, { useState, Component } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { StyledContainerDash } from '../components/styles';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

 const dataList = [{ key: 'Skeniraj' ,it: 'qr-code'}, { key: 'Popis', it1: 'clipboard-list' }, 
 { key: 'Provjera dokumenta',it1: 'clipboard-check' }, { key: 'Kreiranje predračuna' , it1: 'file-invoice-dollar'},
  { key: 'Prijem robe',it1:'cubes' }, { key: 'Prenos', it1: 'truck'}]

const numColumns = 2
const styles  = StyleSheet.create({
        container: {
<<<<<<< HEAD
            paddingTop: 25
=======
            paddingTop: 45
>>>>>>> a5dd6de5419aad4a19885bdfde311d71cb244138
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
          fontSize: 20,
          textAlign: 'center',
          justifyContent: 'center',
        },
      });

export default class App1 extends React.Component{
    _renderItem = ({item, index}) => {
        
        const{itemStyle, itemText} = styles;
        return (
        <StyledContainerDash>
            
        <TouchableOpacity>
            <View style = {itemStyle}>
                <Text style={itemText}>
                    <Ionicons name = {item.it} size={70} color = '#fff'/>
                    <FontAwesome5 name = {item.it1} size={70} color = '#fff'/>
                </Text>
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