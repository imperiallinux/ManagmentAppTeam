import  React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Octicons,Ionicons} from '@expo/vector-icons';
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
} from './../components/styles';
import { View } from 'react-native';

const Dashboard = () => {
    return(
        <StyledContainer>
             <ScrollView>
            <StatusBar style="dark"/>
            <InnerContainer>
                <StyledFormArea>
                    <NewButton>
                        <ButtonTextDash>
                            Provjera
                        </ButtonTextDash>
                    </NewButton>
                    <NewButton>
                        <ButtonTextDash>
                            Popis
                        </ButtonTextDash>
                    </NewButton>
                    <NewButton>
                        <ButtonTextDash>
                            Provjera dokumentacije
                        </ButtonTextDash>
                    </NewButton>
                    <NewButton>
                        <ButtonTextDash>
                            Kreiranje predracuna
                        </ButtonTextDash>
                    </NewButton>
                    <NewButton>
                        <ButtonTextDash>
                            Prijem robe
                        </ButtonTextDash>
                    </NewButton>
                    <NewButton>
                        <ButtonTextDash>
                            Prenos
                        </ButtonTextDash>
                    </NewButton>
                </StyledFormArea>
            </InnerContainer>
            </ScrollView>
        </StyledContainer>
    );
}

export default Dashboard;