import React from 'react';

interface IBlogList {
    frontmatter: { 
        id:  number | null | undefined; 
        title: string | null | undefined; 
        description: string | null | undefined; 
        category: string | null | undefined; 
        date: string | null | undefined; 
        detailText: string | null | undefined; 
    }
}

function BlogList({data, limit, offset}: {data: IBlogList[], limit: number, offset: number}) {
    return (
        <div>
            <h1>
                {
                    data.length
                }
            </h1>
            {
                data.slice(offset, offset + limit).map((item, index) => {
                    return(
                        <div key={index}>
                            <p>id: {item.frontmatter?.id}</p>
                            <h2>{item.frontmatter?.category}</h2>
                            <h2>{item.frontmatter?.title}</h2>
                            <p>{item.frontmatter?.description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default BlogList;