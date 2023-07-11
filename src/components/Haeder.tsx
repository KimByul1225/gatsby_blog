import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";
import styled, {keyframes} from 'styled-components';
import logo from "../images/common/logo_symbol.png";



function Haeder() {
    const [fixedHeder, setFixedHeder] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 110) {
                setFixedHeder(true);
            } else {
                setFixedHeder(false);
            }
        });
    }, []);


    const isActive = (path: string) => {
        const sliceLocation = location.pathname.substring(1);
        const substringLocaton = sliceLocation.split("/");
        const locationPath = substringLocaton[0];
        return path === locationPath ? "active" : ""
    }

    return (
        <HeaderWrap
            className={fixedHeder ? "on" : ""} 
        >
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
                            <li><Link to="/" className={isActive("")}>Home</Link></li>
                            <li><Link to="/introduction" className={isActive("introduction")}>Introduction</Link></li>
                            <li><Link to="/project" className={isActive("project")}>Project</Link></li>
                            <li><Link to="/blog" className={isActive("blog")}>Blog</Link></li>
                        </ul>
                    </Navi>
                </SpaceBetween>
            </Row>
        </HeaderWrap>
        
    )
}

export default Haeder


const headerAnimation = keyframes`
    from{
        opacity: 0.1;
    }to{
        opacity: 1;
    }
`;

const HeaderWrap = styled.header`
    width: 100%;
    background-color: #fff;
    padding: 30px 0;
    box-shadow: 0px 3px  7px 3px #e4e4e4;
    &.on{
        position: fixed;
        top: 0;
        z-index: 999;
        animation: ${headerAnimation} .2s ease-out;
    }
    @media screen and (max-width: 768px){
        padding: 20px 0;
    }
`

const Row = styled.div`
    max-width: 1000px; 
    margin: 0 auto;
    @media screen and (max-width: 1200px){
        max-width: 100%; 
        padding: 0 20px;
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
    a.active{
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
        li a{
            font-size: 16px;
        }
    }
`