import React from 'react';
import Row from './common/Row';
import { styled } from 'styled-components';
import iconGitHub from "../images/common/icon_github.svg";
import iconNotion from "../images/common/icon_notion.svg";
import iconLinkedIn from "../images/common/icon_linkedin.svg";
import iconMail from "../images/common/icon_mail.svg";


function Footer() {
    return (
        <FooterWrap>
            <Row>
                <SpaceBetween>
                    <p>
                        &copy; ByulKim, Built with Gatsby.
                    </p>
                    <IconWrap>
                        <a
                            href="https://github.com/KimByul1225"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                className="ir_so"
                            >
                                git hub 아이콘
                            </span>
                        </a>
                        <a
                            href="https://github.com/KimByul1225"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                className="ir_so"
                            >
                                notion 아이콘
                            </span>
                        </a>
                        <a
                            href="https://github.com/KimByul1225"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                className="ir_so"
                            >
                                linked in 아이콘
                            </span>
                        </a>
                        <a 
                            href="mailto:byulkim1225@gmail.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                className="ir_so"
                            >
                                e-mail 아이콘
                            </span>
                        </a>
                        {/* <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer"><span className='ir_so'>Facebook</span></a> */}
                        
                    </IconWrap>
                </SpaceBetween>
                
            </Row>
        </FooterWrap>
    )
}

export default Footer

const FooterWrap = styled.div`
    background-color: #000;
    color: #fff;
    padding: 50px  0;
    @media screen and (max-width: 768px){
        padding: 60px  0;
    }
`
const SpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 18px;
        font-weight: 300;
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        p{
            font-size: 16px;
            margin-bottom: 35px;;
        }
    }
`
const IconWrap = styled.div`
    a{
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url(${iconGitHub}) center no-repeat;
        background-size: contain;
        margin-right: 25px;
    }
    a:nth-child(2){
        background: url(${iconNotion}) center no-repeat;
        background-size: contain;
    }
    a:nth-child(3){
        background: url(${iconLinkedIn}) center no-repeat;
        background-size: contain;

    }
    a:last-child{
        background: url(${iconMail}) center no-repeat;
        background-size: contain;
        margin-right: 0px;
    }
    a:hover{
        opacity: 0.7;
        transition: .3s ease;
    }

`
