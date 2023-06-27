import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import { graphql, Link, PageProps } from 'gatsby';


export default function project({data}: PageProps<Queries.BlogPostsQuery>) {
    return (
        <Layout title="Project">
            <p>project text</p>
        </Layout>
    );
}

export const query = graphql`
    query BlogPosts {
        allMdx {
            nodes {
                frontmatter {
                    author
                    category
                    date
                    slug
                    title
                }
            }
        }
    }
`

export const Head = ()=> <Seo title="Project"/>


