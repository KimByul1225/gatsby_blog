import React from 'react';

interface IProjectList {
    frontmatter: { 
        id:  number | null | undefined; 
        slug: string | null | undefined; 
        title:  string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; 
        description: string | null | undefined; 
        category: string | null | undefined; 
        task: string | null | undefined; 
        startDate: string | null | undefined; 
        endDate: string | null | undefined; 
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
                data.reverse().map((item, index) => {
                    return(
                        <div key={index}>
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