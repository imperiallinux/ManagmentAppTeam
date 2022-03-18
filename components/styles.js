import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

//Boje u cjeloj aplikaciji
export const Colors = {
  simbol: '#ffffff',
  prv: '#E5E7EB',
  drg: '#1f2937',
  tamna: '#9CA3AF',
  stil: '#6D28D9',
  zelena: '#10B981',
  crvena: '#EF4444',
  bjl: '#ffffff',
  moja: '#9F80FF',
  task: '#e9e5fc'
};

const { simbol, prv, drg, tamna, stil, zelena, crvena, bjl, moja, task } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 50px;
  background-color: ${simbol};
`;
export const StyledContainerDash = styled.View`
  flex: 1;
  padding: 5px;
  padding-top: 5px;
  background-color: ${simbol};

`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  
`;

export const PageLogo = styled.Image`
  width: 280px;
  height: 210px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  color: ${stil};
  
`;
//font-weight: Bold;padding: 10px;
export const SubTitle = styled.Text`
  font-size: 20px;
  letter-spacing; 1px;
  font-weight: bold;
  color: ${stil};
`;
//margin-bottom: 20px;
export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${prv};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 15px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${drg};
  shadowOpacity: 0.9;
  shadowRadius: 10;
  shadowOffset: {
    height: 2px,
    width: 2px,
  };
  elevation: 15;
`;

export const StyledInputLabel = styled.Text`
  color: ${drg};
  font-size: 16px;
  text-align: left;
`;

export const LeftIcon = styled.View`
background-color: black;
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
  elevation: 16;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
  elevation: 16;
`;


export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${stil};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-vertical: 15px;
  margin-left: 45px;
  margin-right: 45px;
  height: 60px;
  shadowOpacity: 0.9;
  shadowRadius: 10;
  shadowOffset: {
    height: 2px,
    width: 2px,
  };
  elevation: 15;
`;

export const ButtonText = styled.Text`
  color: ${simbol};
  font-size: 16px;
  font-weight: bold;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${tamna};
`;

export const NewButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${moja};
  margin-right: 10px;
  border-radius: 30px;
  margin-vertical: 5px;
`;
//justify-content: center;
//align-items: center;
export const ButtonTextDash = styled.Text`
  color: ${simbol};
  font-size: 16px;
  font-weight: bold;
`;

export const TaskBar = styled.View`
flex: 1;
marginTop: 20px;
width: 100%;
height: 150%;
backgroundColor: ${task};
`;

export const TaskBarButton = styled.TouchableOpacity`
 background-color: ${task};
 top: 1.5%;
 left:0%;
  border-radius: 5px;
  width: 20%;
  height: 50px;
`;
export const RightButton = styled.TouchableOpacity`
  left: 84%;
  top: 1.5%;
  position: absolute;

  background-color: ${task};
  border-radius: 5px;
  width: 20%;
  height: 50px;
`;


