import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { graphql, PageProps } from 'gatsby';
import ProjectList from '../../components/project/ProjectList';
import Row from '../../components/common/Row';
import { styled } from 'styled-components';

import iconSelect from "../../images/common/icon_select.png";




export default function project({data}: PageProps<Queries.ProjectQuery>) {
    const {nodes} = data.allMdx;
    const [listSort, setListSort] = useState("desc");

    const sorting = (el: any) => {
        if(listSort === "desc"){
            return el;
        }else{
            return el.slice(0).reverse();
        }
    }
    
    return (
        <Layout title="Project">
            <Row>
                <InputWrap>
                    <p>
                        * 프로젝트 시작일을 기준으로 정렬 됩니다.
                    </p>
                    <select
                        onChange={(e) => setListSort(e.target.value)}
                    >
                        <option value="desc">올림차순</option>
                        <option value="asb">내림차순</option>
                    </select>
                </InputWrap>
                

                <ProjectList
                    data={sorting(nodes)}
                />
            </Row>        
        </Layout>
    );
}


export const query = graphql`
    query Project {
        allMdx(filter: {frontmatter: {slug: {eq: "project"}}} sort: {frontmatter: {startDate: DESC}}) {
            nodes{
                frontmatter {
                    id
                    slug
                    title
                    description
                    category
                    task
                    startDate
                    endDate
                    tag
                    detail
                    headerImage {
                        childImageSharp {
                            gatsbyImageData(height: 450, placeholder: BLURRED)
                        }
                    }
                }
            }
        }
    }
`



export const Head = ()=> <Seo title="Project"/>


const InputWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 30px;
    select{
        -webkit-appearance: none;
        appearance: none;
        width: 160px; 
        height: 50px; 
        border: 1px solid #E0E0E0; 
        border-radius:4px; 
        padding-left: 15px; 
        font-size: 16px;  
        color: #828282; 
        background: #fff url(${iconSelect}) center right 15px no-repeat; 
        background-size: 18px;
    }
    p{
        color: #818181;
        margin-right: 20px;
    }

    @media screen and (max-width: 768px){
        p{
            font-size: 14px;
        }
    }
`
