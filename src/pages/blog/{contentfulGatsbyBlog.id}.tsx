import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

/**
 * @description Blog의 상세 내용을 보여주기 위한 components
 */

export default function BlogDetail({data}: PageProps<Queries.BlogQuery>) {
    
    // const image = getImage(data.contentfulProduct?.preview?.gatsbyImageData!);
    console.log("상세", data);
    return (
        // <Layout
        //     title={data.contentfulProduct?.name!}
        // >
        //     <GatsbyImage
        //         image={image!}
        //         alt={data.contentfulProduct?.name!}
        //     />
        //     <h2>{data.contentfulProduct?.price}</h2>
        // </Layout>
        <div>
            상세
        </div>
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
