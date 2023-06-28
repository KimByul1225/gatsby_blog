import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import { graphql, PageProps } from 'gatsby';
import ProjectList from '../../components/project/ProjectList';



export default function project({data}: PageProps<Queries.ProjectQuery>) {
    const {nodes} = data.allMdx;

    const [keyword, setKeyword] = useState("");

    console.log("ck", nodes);
    console.log("검색어", keyword.toLowerCase());



    // 방법1
    // const filtering = (el: any) => {
    //     return el.filter((item: { frontmatter: { title: string; description: string; category: string; }; }) => item.frontmatter?.title?.toLowerCase().includes(keyword.toLowerCase()) || item.frontmatter?.description?.toLowerCase().includes(keyword.toLowerCase()) || item.frontmatter?.category?.toLowerCase().includes(keyword.toLowerCase()) )
    // }

    // 방법2
    const keys = ["title", "description", "category"];
    const filtering = (el: any) => {
        return el.filter((item: { frontmatter: any }) => keys.some(key => item.frontmatter[key].toLowerCase().includes(keyword.toLowerCase()))
        );
    }

    console.log("방법2", filtering(nodes));

    
    return (
        <Layout title="Project">
            <div>
                <input
                    type="search"
                    aria-label="Search"
                    placeholder="Filter blog posts by title or tag"
                    onChange={(e) => setKeyword(e.target.value)}
                />
                /
                <span> 총 {filtering(nodes).length} 건</span>
            </div>
            <hr />
            <ProjectList
                data={filtering(nodes)}
            />
            <hr />
            <hr />
            <div>
                {
                    nodes.map((item, index)=>(
                        <div key={index}>
                            <hr />
                            <h2>{item.frontmatter?.title}</h2>
                            <p>{item.frontmatter?.description}</p>

                            <p>{item.frontmatter?.category}</p>
                            <p>{item.frontmatter?.task}</p>

                            <p>
                                <span>{item.frontmatter?.startDate}</span> ~ 
                                <span>{item.frontmatter?.endDate}</span>
                            </p>
                            {/* <WorkDetail item={item.frontmatter?.work}/> */}
                            <hr />
                        </div>
                    ))
                }
            </div>
        
        </Layout>
    );
}


export const query = graphql`
    query Project {
        allMdx(filter: {frontmatter: {slug: {eq: "project"}}} sort: {frontmatter: {id: DESC}}) {
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
                }
            }
        }
    }
`



export const Head = ()=> <Seo title="Project"/>



