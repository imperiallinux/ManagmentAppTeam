import  React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//Biblioteke Reacta
import { Formik } from 'formik';
//React-native koristi biblioteku ikonica skoro sve mozete nac na 
//https://icongr.am/
//https://oblador.github.io/react-native-vector-icons/
//https://icons.expo.fyi/
import {Octicons,Ionicons} from '@expo/vector-icons';
//import { Colors } from './../components/styles';
//Stilovi
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
} from './../components/styles';
import { View } from 'react-native';

const {stil, tamna} = Colors;

//Unosimo redom elemente Login stranice dodjeljujemo im vrijednosti iz style
//formik ya prijavu mora imat dedikacije loga kao i sifru
//Formik unosimo handle funkcije koje ce se izvrsiti on submit
const ServerPrijava = ({navigation}) => {
    //obaveyno svaki useState deklarisati
    const [hidePassword,setHidePassword] = useState(true);
 //<PageTitle></PageTitle>
 //<SubTitle></SubTitle>
    return(
        <StyledContainer>
            <StatusBar style="dark" animated = {true}/>
            <ScrollView>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/LogoApp.png')} />
               

                <Formik 
                initialValues={{email:'',password:''}}
                onSubmit={(values)=>{
                    console.log(values);
                }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => 
                    //KOMPLETNO MIJENJANJE SAMO PRIVREMENO 
                    (<StyledFormArea>
                        <MyTextInput 
                        label="IP adresa:"
                        icon="globe"
                        placeholder="192.0.0.7"
                        placeholderTextColor={tamna}
                        onChangeText={handleChange('text')}
                        onBlur={handleBlur('text')}
                        value={values.text}
                        keyboardType="text"
                        />
                        <MyTextInput 
                        label="Port:"
                        icon="code"
                        placeholder=":3000"
                        placeholderTextColor={tamna}
                        onChangeText={handleChange('port')}
                        onBlur={handleBlur('port')}
                        value={values.port}
                        keyboardType="text"
                        />
                        <MsgBox></MsgBox>
                        <StyledButton onPress = {()=> navigation.navigate("Prijava")}>
                            <ButtonText>
                                PRIJAVA
                            </ButtonText>
                        </StyledButton>
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
            </ScrollView>
        </StyledContainer>
    );
    ///////////////////////////////////////////////////////ERROR
    //<StyledButton>
                      //      <ButtonText>
                            //    PRIJAVA
                         //   </ButtonText>
                      //  </StyledButton>
                  //      <Line/>
}
//koristimo react native props
//props zadajemo po potrebi i mogu kanije biti dodati
//ZA SAD NE DIRATI
const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon><Octicons name={icon} size={30} color={stil} /></LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                     <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={tamna}/>
                </RightIcon>
            )}
        </View>
    );
};

//(NAPOMENA SEBI) OBAVEZNO PROMIJENITI OCTICONS

export default ServerPrijava;