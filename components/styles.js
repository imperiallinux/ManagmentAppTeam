import styled from 'styled-components';
import {View, Text, Image} from 'react-native';
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
};

const {simbol, prv, drg, tamna, stil, zelena, crvena} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 10px;
  background-color: ${simbol};
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
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${stil};
  padding: 10px;
`;