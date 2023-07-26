import React from 'react';
import Haeder from './Haeder';
import Footer from './Footer';
import { StyleSheetManager, styled } from 'styled-components';
import GoTopButton from './common/GoTopButton';


interface ILayoutProps{
    children: any;
}

/**
 * @description layout components header와 footer를 포함하고 있음
 */

function Layout({children}: ILayoutProps) {
    return (
        <StyleSheetManager shouldForwardProp={() => true}>
            <Haeder/>
            <Main>
                {children}
            </Main>
            <GoTopButton/>
            <Footer/>
        </StyleSheetManager>
    );
}

export default Layout;


const Main = styled.main`
    padding: 0 0 150px 0;
`