import * as React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql, PageProps } from 'gatsby';
import Stack from "../../../stack/index.mdx";
import NowStudying from "../../../stack/nowStudying.mdx";
import { MDXProvider} from "@mdx-js/react";
import { styled } from "styled-components";
import Row from "../../components/common/Row";
import TagList from "../../components/common/TagList";




export default function introduction({data}: PageProps<Queries.ExperienceQuery>) {
    return (
        <Layout>
        <Row>
            <SectionTitle>
            Experience 🧑🏻‍💻
            </SectionTitle>
            <ExperienceWrap>
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
                    <TagList item={item.frontmatter?.work}/>
                </ExperienceDetail>                
                </ExperienceList>
                ))
            }
            </ExperienceWrap>
                    
            <SectionTitle>
            Stacks 💻
            </SectionTitle>
            <MdxWrap as="div">
            <Stack/>
            </MdxWrap>
            
            <SectionTitle>
            Now Studying ✍🏻
            </SectionTitle>
            <MdxWrap as="div">
            <NowStudying/>
            </MdxWrap>
        </Row>      
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

export const Head = ()=> <Seo title="Itroduction"/>



const SectionTitle = styled.h2`
    font-size: 32px;
    font-weight: 700;
    border-left: 5px solid #000;
    padding-left: 20px;
    margin-top: 80px;
    margin-bottom: 20px;
    line-height: 45px;
`

const ExperienceWrap = styled.div`

`

const ExperienceList = styled.div`
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    &:first-child{
        border-top: 1px solid #e4e4e4;
    }

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

const MdxWrap = styled(MDXProvider)`
    font-size: 32px;
    padding-top: 20px;
    img{
        height: 34px;
        width: auto;
        border-radius: 20px;
    }
`;