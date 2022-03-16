import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

//Boje u cjeloj aplikaciji
export const Colors = {
  simbol: '#EFEDFB',
  prv: '#E5E7EB',
  drg: '#1f2937',
  tamna: '#9CA3AF',
  stil: '#6D28D9',
  zelena: '#10B981',
  crvena: '#EF4444',
  bjl:'#ffffff',
  moja:'#9F80FF',
};

const {simbol, prv, drg, tamna, stil, zelena, crvena, bji, moja} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 5px;
  padding-top: 25px;
  backgroundColor: ${simbol};
`;
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled.Text`
  font-size: 5px;
  text-align: center;
  color: ${stil};
  
`;//font-weight: Bold;padding: 10px;

export const SubTitle = styled.Text`
  font-size: 5px;
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
  margin-left: 60px;
  margin-right: 60px;
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
  font-size: 18px;
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
  padding: 5px;
  background-color: ${moja};
  
  border-radius: 30px;
  margin-vertical: 5px;
  height: 110px;
  width: 150%;
`;
//justify-content: center;
//align-items: center;
export const ButtonTextDash = styled.Text`
  color: ${simbol};
  font-size: 22px;
  font-weight: bold;
`;