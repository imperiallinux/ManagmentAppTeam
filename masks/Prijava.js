import  React from 'react';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from './../components/styles';

const Prijava = () => {
    return(
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/LogoApp.png')} />
                <PageTitle>MANAGMENT APP</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Prijava;