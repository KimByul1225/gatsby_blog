import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, Link, PageProps } from 'gatsby';



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

    console.log("!!!", data)
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
    </Layout>
  )
}

export const query = graphql`
    query Experience {
        allMdx(filter: {frontmatter: {slug: {eq: "ex"}}}) {
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

