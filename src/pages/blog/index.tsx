import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { graphql, PageProps } from 'gatsby';
import BlogList from '../../components/blog/BlogList';
import Pagination from '../../components/blog/Pagination';



export default function blog({data}: PageProps<Queries.BlogsQuery>) {
    const {nodes} = data.allContentfulGatsbyBlog;
    const [keyword, setKeyword] = useState("");
    const [listSort, setListSort] = useState("desc");

    const limit = 10;
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    console.log("nodes", nodes);

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
            <div>
                <select
                    onChange={(e) => setListSort(e.target.value)}
                >
                    <option value="desc">올림차순</option>
                    <option value="asb">내림차순</option>
                </select>
            </div>
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
        </Layout>
    );
}

// export const query = graphql`
//     query Blog {
//         allMdx(filter: {frontmatter: {slug: {eq: "blog"}}} sort: {frontmatter: {id: DESC}}) {
//             nodes{
//                 frontmatter {
//                     id
//                     title
//                     description
//                     category
//                     date
//                     tag
//                     detailText
//                 }
//                 excerpt
//             }
//         }
//     }
// `

export const query = graphql`
    query Blogs {
        allContentfulGatsbyBlog (sort: {date: DESC}) {
            nodes {
                id
                title
                date
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

