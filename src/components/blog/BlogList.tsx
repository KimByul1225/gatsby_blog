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

function BlogList({data}: {data: IBlogList[]}) {
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
                            <h2>{item.frontmatter?.category}</h2>
                            <h2>{item.frontmatter?.title}</h2>
                            <h2>{item.frontmatter?.description}</h2>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default BlogList;