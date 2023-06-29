import React from 'react';

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
                    return(
                        <div key={index}>
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