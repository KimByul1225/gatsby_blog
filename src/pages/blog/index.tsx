import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { graphql, PageProps } from 'gatsby';
import BlogList from '../../components/blog/BlogList';



export default function blog({data}: PageProps<Queries.BlogQuery>) {
    const {nodes} = data.allMdx;
    const [keyword, setKeyword] = useState("");

    const keys = ["title", "description", "category"];
    const filtering = (el: any) => {
        return el.filter((item: { frontmatter: any }) => keys.some(key => item.frontmatter[key].toLowerCase().includes(keyword.toLowerCase()))
        );
    }

    console.log("blog", data.allMdx);

    return (
        <Layout title="Blog">
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
            <BlogList 
                data={filtering(nodes)}
            />
        </Layout>
    );
}

export const query = graphql`
    query Blog {
        allMdx(filter: {frontmatter: {slug: {eq: "blog"}}} sort: {frontmatter: {date: DESC}}) {
            nodes{
                frontmatter {
                    id
                    title
                    description
                    category
                    date
                    tag
                    detailText
                }
                excerpt
            }
        }
    }
`

export const Head = ()=> <Seo title="Blog"/>

