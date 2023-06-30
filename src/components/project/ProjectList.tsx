import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
        <div>
            <h1>
                {
                    data.length
                }
            </h1>
            {
                data.map((item, index) => {
                    const image = getImage(item?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!);

                    return(
                        <div key={index}>
                            <GatsbyImage 
                                image={image as any}
                                alt={item.frontmatter?.title!}
                            />
                            <p>id : {item.frontmatter?.id}</p>
                            <h2>{item.frontmatter?.title}</h2>
                            <h2>{item.frontmatter?.description}</h2>
                            <h2>{item.frontmatter?.category}</h2>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProjectList;