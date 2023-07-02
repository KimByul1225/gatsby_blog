import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from 'styled-components';

interface IProjectList {
    frontmatter: { 
        id:  number | null | undefined; 
        slug: string | null | undefined; 
        title:  string | null | undefined; 
        description: string | null | undefined; 
        category: string | null | undefined; 
        task: string | null | undefined; 
        startDate: string | null | undefined; 
        endDate: string | null | undefined; 
        headerImage:  { readonly childImageSharp: { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData } | null }
    }
}

function ProjectList({data}: {data: IProjectList[]}) {
    return (
        <ProjectWrap>
            {
                data.map((item, index) => {
                    const image = getImage(item?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!);

                    return(
                        <List key={index}>
                            <DeatailWrap>
                                <h5>
                                    {item.frontmatter?.category}
                                </h5>
                                <h3>
                                    {item.frontmatter?.title}
                                </h3>
                                <h4>
                                    {item.frontmatter?.description}
                                </h4>
                                <p>
                                    {item.frontmatter?.startDate} ~ {item.frontmatter?.endDate}
                                </p>
                            </DeatailWrap>
                            <GatsbyImage 
                                image={image as any}
                                alt={item.frontmatter?.title!}
                            />
                        </List>
                    )
                })
            }
        </ProjectWrap>
    );
}

export default ProjectList;

const ProjectWrap = styled.ul`
    
`
const List = styled.li`
    display: flex;
    align-items: center;
`

const DeatailWrap = styled.div`
    
`