import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, PageProps } from 'gatsby';
import Stack from "../../stack/index.mdx";
import { MDXProvider} from "@mdx-js/react";


// const MyH1 = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <h1 style={{ color: `tomato` }} {...props} />
// const MyParagraph = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement>) => (
//     <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
// )

// const components = {
//     h1: MyH1,
//     p: MyParagraph,
// }



function WorkDetail({item}: {item: readonly (string | null)[] | null | undefined}) { 
    return(
        <div>
          {
              item && item.map((el, index) => {
                  return(
                      <div key={index}>
                          <p>{el}</p>
                      </div>
                  )
              })
          }
        </div>
    )
}


export default function IndexPage({data}: PageProps<Queries.ExperienceQuery>) {
  return (
    <Layout title="메인페이지">
      <div>
          {
              data.allMdx?.nodes.map((item, index)=>(
              <div key={index}>
                <hr />
                <h2>{item.frontmatter?.companyName}</h2>
                <p>{item.frontmatter?.team}</p>
                <p>{item.frontmatter?.position}</p>
                <p>{item.frontmatter?.task}</p>
                <p>
                  <span>{item.frontmatter?.startDate}</span> ~ 
                  <span>{item.frontmatter?.endDate}</span> /
                  <span>{item.frontmatter?.period}</span>
                </p>
                <WorkDetail item={item.frontmatter?.work}/>
                <hr />
              </div>
              ))
          }
      </div>
      <div>
        <MDXProvider>
          <Stack/>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query Experience {
        allMdx(filter: {frontmatter: {slug: {eq: "experience"}}}) {
          nodes{
            frontmatter {
              companyName
              endDate
              period
              position
              slug
              startDate
              task
              team
              work
            }
          }
        }
      }
`

export const Head = ()=> <Seo title="Home"/>

