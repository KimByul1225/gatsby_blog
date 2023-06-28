import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import { graphql, PageProps } from 'gatsby';

import Mtest from '../../../stack/index.mdx';

import { MDXProvider} from "@mdx-js/react";



const MyH1 = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <h1 style={{ color: `tomato` }} {...props} />
const MyParagraph = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
)

const components = {
    h1: MyH1,
    p: MyParagraph,
}

export default function blog({data}: PageProps<Queries.StackQuery>) {
    
    console.log("stack", data.allMdx.nodes[0].body);



    return (
        <Layout title="Blog">
            <p>blog text</p>
            <MDXProvider>
                <Mtest/>
            </MDXProvider>
            {/* <MDXProvider>
                {data.allMdx.nodes[0].body}
            </MDXProvider> */}
        </Layout>
    );
}

export const query = graphql`
    query Stack {
        allMdx(filter: {frontmatter: {slug: {eq: "st"}}}) {
            nodes{
                body
            }
        }
    }
`

export const Head = ()=> <Seo title="Blog"/>


// node => node.fields.source === 'blog'