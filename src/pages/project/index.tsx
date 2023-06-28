import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import { graphql, PageProps } from 'gatsby';



export default function project({data}: PageProps<Queries.ProjectQuery>) {
    console.log("projcet", data);
    return (
        <Layout title="Project">
            <p>project text</p>
            <hr />
            <div>
                {
                    data.allMdx?.nodes.map((item, index)=>(
                    <div key={index}>
                        <h3>{item.frontmatter?.title}</h3>
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
        allMdx(filter: {frontmatter: {slug: {eq: "project"}}}) {
            nodes{
                frontmatter {
                    title
                }
            }
        }
    }
`



export const Head = ()=> <Seo title="Project"/>


