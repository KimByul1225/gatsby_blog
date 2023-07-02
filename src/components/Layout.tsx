import React from 'react';
import Haeder from './Haeder';
import Footer from './Footer';
import { styled } from 'styled-components';


interface ILayoutProps{
    children: any;
    title: string;
}

/**
 * @description layout components header와 footer를 포함하고 있음
 */

function Layout({children, title}: ILayoutProps) {
    return (
        <div>
            <Haeder/>
            <Main>
                <h1>{title}</h1>
                {children}
            </Main>
            <Footer/>
        </div>
    );
}

export default Layout;

const Main = styled.main`
    padding: 0 0 150px 0;
`