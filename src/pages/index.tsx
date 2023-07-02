import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, PageProps } from 'gatsby';
import Stack from "../../stack/index.mdx";
import { MDXProvider} from "@mdx-js/react";

import { styled } from "styled-components";



import {  StaticImage } from "gatsby-plugin-image";
import Row from "../components/common/Row";


// const MyH1 = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <h1 style={{ color: `tomato` }} {...props} />
// const MyParagraph = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement>) => (
//     <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
// )

// const components = {
//     h1: MyH1,
//     p: MyParagraph,
// }



function WorkDetail({item}: {item: readonly (string | null)[] | null | undefined}) { 
    return(
        <TagWrap>
          {
              item && item.map((el, index) => {
                  return(
                      <span key={index}>
                        # {el}
                      </span>
                  )
              })
          }
        </TagWrap>
    )
}


export default function IndexPage({data}: PageProps<Queries.ExperienceQuery>) {
  return (
    <Layout title="메인페이지">
      <Row>
        <StaticImage src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80" alt="Stickers"/>

        <div>
          {
            data.allMdx?.nodes.map((item, index)=>(
            <ExperienceList key={index}>
              <h3>
                {item.frontmatter?.companyName}
              </h3>
              <ExperienceDetail>
                <h4>{item.frontmatter?.task}</h4>
                <h5>{item.frontmatter?.team} / {item.frontmatter?.position}</h5>
                <p>
                  {item.frontmatter?.startDate} ~ {item.frontmatter?.endDate}<span>{item.frontmatter?.period}</span>
                </p>
                  <WorkDetail item={item.frontmatter?.work}/>
              </ExperienceDetail>                
            </ExperienceList>
            ))
          }
        </div>
        

        <MDXProvider>
          <Stack/>
        </MDXProvider>
      </Row>
      
      
        
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
          
      </div>
      <div>
        
      </div>
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

const ExperienceList = styled.div`
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
  h3{
    width: 30%;
    font-size: 28px;
    font-weight: 600;
  }
  h4{
    color: #ff4d15;
    font-size: 18px;
    margin-bottom: 20px;
  }
  h5{
    margin-bottom: 10px;
  }
  p{
    color: #818181;
    font-weight: 300;
    margin-bottom: 20px;
    span{
      color: #000;
      display: inline-block;
      margin-left: 10px;
      font-weight: 600;
    }
  }
`
const ExperienceDetail = styled.div`
  width: 70%;
`

const TagWrap = styled.div`
  span{
    display: inline-block;
    margin: 0 20px 10px 0;
    padding: 5px 15px;
    background-color: #000;
    color: #fff;
    border-radius: 20px;
  }
`