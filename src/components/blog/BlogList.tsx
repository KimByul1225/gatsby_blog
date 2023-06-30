import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from 'styled-components';

import { Link } from "gatsby";

interface IBlogList {
    id: string;
    title: string | null;
    date: string | null;
    category: string | null;
    description: string | null;
    detail: { readonly raw: string | null } | null;
    headerImage : { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData | null, readonly file: { readonly url: string | null } | null };
}

interface IBackground {
    img: string;
}

function BlogList({data, limit, offset}: {data: IBlogList[], limit: number, offset: number}) {
    return (
        <div>
            <h1>
                검색결과 총 {data.length} 건
            </h1>
            {
                data.slice(offset, offset + limit).map((item, index) => {
                    const image = getImage(item?.headerImage?.gatsbyImageData!);
                    const urlPath = `https:${item.headerImage?.file?.url}`;
                    return(
                        <div key={index}>
                            <Link
                                to={`/blog/${item.id}`}
                            >   
                                <Background
                                    img={urlPath}
                                />
                                <GatsbyImage
                                    image={image!}
                                    alt={item.title!}
                                />
                                <p>id: {item?.id}</p>
                                <h2>{item?.category}</h2>
                                <h2>{item?.title}</h2>
                                <p>{item?.date}</p>
                                <p>{item?.description}</p>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default BlogList;

const Background = styled.div<IBackground>`
    width: 150px;
    height: 150px;
    border: 1px solid #000;
    background: url(${(props) => props.img}) center no-repeat;
    background-size: cover;
`