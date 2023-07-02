import React from 'react';
import { Link } from "gatsby";
import { styled } from 'styled-components';
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
    padding: 50px 0;
    border-bottom: 1px solid #000;
`
const SpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled(Link)`
    display: inline-block;
    h1{
        width: 50px;
        height: 50px;
        background: url(${logo}) center no-repeat;
        background-size: cover;
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
`