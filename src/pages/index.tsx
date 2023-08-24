import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, PageProps } from 'gatsby';
import { styled } from "styled-components";
import backgroundImage from "../images/home/main_code.jpg";


interface IBackgroundBox {
  image: string;
}

/**
 * @description 메인페이지
 */

export default function IndexPage({data}: PageProps<Queries.ExperienceQuery>) {
  return (
    <Layout>
      <MainWrap>
        <FlexWrap>
          <BackgroundBox
            image={backgroundImage}
          />
          <ItroBox>
            <h2>김 별 <span>(Byul Kim)</span></h2>
            <h4>@ KimByul1225</h4>
            <p>
              Anyang, Republic of Korea
            </p>
            {/* <a 
                href="mailto:byulkim1225@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
            >byulkim1225@gmail.com</a> */}
            <a
                href="https://github.com/KimByul1225"
                target="_blank"
                rel="noopener noreferrer"
            >
              https://github.com/KimByul1225
            </a>
            <p>
              본 블로그는 <a 
                href="https://www.gatsbyjs.com/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
              </a>를 활용하여 직접 만들었으며,   
            </p>
            <p>
              게시글은 본인이 직접 공부한 내용을 작성한 것으로 일부 내용은 정확하지 않은 내용을 포함하고 있을 수 있습니다.
            </p>
          </ItroBox>
          
        </FlexWrap>
        
      </MainWrap>      
    </Layout>
  )
}

export const query = graphql`
    query Experience {
        allMdx(filter: {frontmatter: {slug: {eq: "experience"}}}) {
          nodes{
            frontmatter {
              companyName
              endDate
              period
              position
              slug
              startDate
              task
              team
              work
            }
          }
        }
      }
`

export const Head = ()=> <Seo title="Home"/>

const MainWrap = styled.div`
    max-width: 1000px; 
    min-height: calc(100vh - 446px);
    margin: 0 auto;
    padding-top: 150px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1200px){
        max-width: 100%; 
        padding: 50px 20px 0 20px;
    }
    
`


const FlexWrap = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 80px;
  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`

const ItroBox = styled.div`
  width: calc(100% - 400px);
  padding: 0 0 15px 30px;
  h2{
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
    span{
      font-size: 32px;
      font-weight: 500;
    }
  }
  h4{
    font-size: 18px;
    padding-left: 10px;
    margin-bottom: 45px;
  }
  h5{
    padding-left: 10px;
    margin-bottom: 10px;
  }
  p{
    padding-left: 10px;
    word-break: keep-all;
  }
  a{
    display: inline-block;
    color: #000;
    text-decoration: underline;
  }
  > a{
    padding-left: 10px;
    margin-bottom: 35px;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    text-align: center;
  }
`
const BackgroundBox = styled.div<IBackgroundBox>`
  width: 400px;
  background: url(${backgroundImage}) center no-repeat;
  background-size: cover;
  border-radius: 15px;
  @media screen and (max-width: 768px){
    width: 100%;
    height: 300px;
  }

`

