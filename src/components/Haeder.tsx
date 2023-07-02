import React from 'react';
import { Link } from "gatsby";
import styled, {keyframes} from 'styled-components';
import Row from './common/Row';

import logo from "../images/common/logo_symbol.png"


function Haeder() {
    return (
        <HeaderWrap>
            <Row>
                <SpaceBetween>
                    <Logo
                        to="/"
                    >
                        <h1>
                            <span className="ir_so">
                                홈으로
                            </span>
                        </h1>
                    </Logo>

                    <Navi>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/project">Project</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </Navi>
                </SpaceBetween>
            </Row>
        </HeaderWrap>
        
    )
}

export default Haeder

const HeaderWrap = styled.header`
    padding: 30px 0;
    box-shadow: 0px 3px  7px 3px #e4e4e4;
    @media screen and (max-width: 768px){
        padding: 20px 0;
    }
`
const SpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`
const logoAnimation = keyframes`
    from{
        opacity: 1;
    }to{
        opacity: 0.3;
    }
`;

const Logo = styled(Link)`
    display: inline-block;
    h1{
        width: 50px;
        height: 50px;
        background: url(${logo}) center no-repeat;
        background-size: cover;
    }
    &:hover h1{
        animation: ${logoAnimation} .3s ease-out 3;
    }
`

const Navi = styled.nav`
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    li{
        margin-right: 50px;
    }
    li:last-child{
        margin-right: 0px;
    }
    li a{
        font-size: 18px;
        font-weight: bold;
        color: #000;
        padding: 10px 0;
    }
    li a:hover{
        color: #777;
        transition: all .3s ease;
    }
    [aria-current]:not([aria-current="false"]) {
        font-weight: bold;
        color: #ff4d15;
    }
    @media screen and (max-width: 768px){
        margin-top: 40px;
        padding: 0 10px;
        width: 100%;
        ul{
            justify-content: space-between;
        }
        li{
            margin-right: 0px;
        }
    }
`