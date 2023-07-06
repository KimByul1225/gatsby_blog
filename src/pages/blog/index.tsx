import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { graphql, PageProps } from 'gatsby';
import BlogList from '../../components/blog/BlogList';
import Pagination from '../../components/blog/Pagination';

import { styled, css } from 'styled-components';
import iconSelect from "../../images/common/icon_select.png";
import iconSearch from "../../images/common/icon_search.png";
import Row from '../../components/common/Row';


interface IInputWrap{
    keyword: string;
}


export default function blog({data}: PageProps<Queries.BlogsQuery>) {
    const {nodes} = data.allContentfulGatsbyBlog;
    const [keyword, setKeyword] = useState("");
    const [listSort, setListSort] = useState("desc");
    const limit = 10;
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    // 방법1
    // const filtering = (el: any) => {
    //     return el.filter((item: { frontmatter: { title: string; description: string; category: string; }; }) => item.frontmatter?.title?.toLowerCase().includes(keyword.toLowerCase()) || item.frontmatter?.description?.toLowerCase().includes(keyword.toLowerCase()) || item.frontmatter?.category?.toLowerCase().includes(keyword.toLowerCase()) )
    // }

    // 방법2
    const keys = ["title", "description", "category"];
    const filtering = (el: any) => {
        if(listSort === "desc"){
            return el.filter((item: any) => keys.some(key => item[key].toLowerCase().includes(keyword.toLowerCase())));
        }else{
            return el.filter((item: any) => keys.some(key => item[key].toLowerCase().includes(keyword.toLowerCase()))).reverse();
        }
    }
    
    return (
        <Layout title="Blog">
            <Row>
                <InputWrap
                    keyword = {keyword}
                >   
                    <SelectBox>
                        <select
                            onChange={(e) => setListSort(e.target.value)}
                        >
                            <option value="desc">오름차순</option>
                            <option value="asb">내림차순</option>
                        </select>
                    </SelectBox>
                    <div>
                        <input
                            type="search"
                            aria-label="Search"
                            placeholder=""
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </div>
                </InputWrap>
                <TotalCount> 총 <span>{filtering(nodes).length}</span> 건</TotalCount>
                <BlogList 
                    data={filtering(nodes)}
                    limit={limit}
                    offset={offset}
                    />
                <Pagination
                    total={filtering(nodes).length}
                    limit={limit}
                    page={page}
                    offset={offset}
                    setPage={setPage}
                />
            </Row>
            
        </Layout>
    );
}

export const query = graphql`
    query Blogs {
        allContentfulGatsbyBlog (sort: {date: DESC}) {
            nodes {
                id
                title
                date(formatString: "YYYY.MM.DD HH:mm")
                category
                description
                detail {
                    raw
                }
                headerImage {
                    gatsbyImageData(placeholder: BLURRED, height: 400)
                    file {
                        url
                    }
                }
            }
        }
    }

`

export const Head = ()=> <Seo title="Blog"/>



const InputWrap = styled.div<IInputWrap>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
    p{
        color: #818181;
        margin-right: 20px;
    }
    input{
        width: 300px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        color: #828282;
        font-size: 16px;
        height: 50px;
        padding: 0 15px;
        ${(props) => props.keyword === "" && css`
            background: url(${iconSearch}) center right 15px no-repeat;
            background-size: 20px;
        `}
    }
    
    @media screen and (max-width: 768px){
        justify-content: center;
        p{
            font-size: 14px;
        }
        div{
            width: calc(100% - 160px);
        }
        input{
            width: 100%;
        }
    }
`
const SelectBox = styled.div`
    margin-right: 20px; 
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
    @media screen and (max-width: 768px){
        width: 160px !important;
    }
`

const TotalCount = styled.p`
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    span{
        color: #ff4d15;
    }
`