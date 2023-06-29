import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import { graphql, PageProps } from 'gatsby';
import ProjectList from '../../components/project/ProjectList';





export default function project({data}: PageProps<Queries.ProjectQuery>) {
    const {nodes} = data.allMdx;
    const [listSort, setListSort] = useState("desc");
    console.log("nodes", nodes)


    const sorting = (el: any) => {
        if(listSort === "desc"){
            return el;
        }else{
            return el.slice(0).reverse();
        }
    }
    
    return (
        <Layout title="Project">
            <div>
                <select
                    onChange={(e) => setListSort(e.target.value)}
                >
                    <option value="desc">올림차순</option>
                    <option value="asb">내림차순</option>
                </select>
            </div>
            <div>
                <span> 총 {sorting(nodes).length} 건</span>
            </div>
            <hr />
            <ProjectList
                data={sorting(nodes)}
            />
            <hr />
            <hr />
            <div>
                {/* {
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
                            <WorkDetail item={item.frontmatter?.work}/>
                            <hr />
                        </div>
                    ))
                } */}
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
                    headerImage 
                }
            }
        }
    }
`



export const Head = ()=> <Seo title="Project"/>



