import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";




import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";


/**
 * @description Blog의 상세 내용을 보여주기 위한 components
 */


interface IBlogList {
    contentfulGatsbyBlog: {
        id: string;
        title: string | null;
        date: string | null;
        category: string | null;
        description: string | null;
        detail: any;
        headerImage : { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData | null, readonly file: { readonly url: string | null } | null };
    }
    
}

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => <strong>{text}</strong>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => <p>{children}</p>,
    },
    renderText: (text: string) => {
        if (!text) return <br />; 
        return text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]);
    },
    
}



export default function BlogDetail({data}: {data: IBlogList}) {
    const { contentfulGatsbyBlog } = data;

    console.log("contentfulGatsbyBlog", contentfulGatsbyBlog.detail.raw);

    
    
    // const image = getImage(data.contentfulProduct?.preview?.gatsbyImageData!);
    // console.log("상세", data);
    return (
        <Layout
            title="상세"
        >
            <div>상세</div>
            {/* <div>{renderRichText(raw)}</div> */}
            
            <div>{renderRichText(contentfulGatsbyBlog.detail, options)}</div>
        </Layout>
    )
}
export const query = graphql`
    query Blog($id: String!) {
        contentfulGatsbyBlog(id: {eq: $id}) {
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
`
