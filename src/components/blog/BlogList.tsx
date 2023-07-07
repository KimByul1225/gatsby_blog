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


function BlogList({data, limit, offset}: {data: IBlogList[], limit: number, offset: number}) {
    return (
        <ul>
            {
                data.length != 0 ? data.slice(offset, offset + limit).map((item, index) => {
                    const image = getImage(item?.headerImage?.gatsbyImageData!);
                    return(
                        <List key={index}>
                            <Link
                                to={`/blog/${item.id}`}
                            >   
                                <DeatailWrap>       
                                    <h5>{item?.category}</h5>
                                    <h3 className="ellipsis">{item?.title}</h3>
                                    <h4 className="ellipsis">{item?.description}</h4>
                                    <p>{item?.date}</p>
                                </DeatailWrap>

                                <StyledGatsbyImage 
                                    image={image as any}
                                    alt={item.title!}
                                />
                            </Link>
                            
                        </List>
                    )
                })
                :
                <ListNone>
                    게시글이 없습니다.
                </ListNone>
            }
            
        </ul>
    );
}

export default BlogList;


const List = styled.li`
    border-bottom: 1px solid #e4e4e4;
    a{
        padding: 30px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #000;
    }
    a:hover{
        opacity: 0.7;
        transition: all .3s ease;
    }
    
    &:first-child{
        border-top: 1px solid #e4e4e4;
    }
    @media screen and (max-width: 768px) {
        a{
            flex-direction: column-reverse
        }
        
    }
`
const ListNone = styled.li`
    border-bottom: 1px solid #e4e4e4;
    border-top: 1px solid #e4e4e4;
    padding: 30px 0;
    color: #000;
    text-align: center;
    font-size: 18px;
`

const DeatailWrap = styled.div`
    width: calc(100% - 200px);
    padding-right: 10px;
    h5{
        color: #ff4d15;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    h3{
        margin-bottom: 10px;
        font-size: 28px;
        font-weight: 600;
    }
    h4{
        margin-bottom: 20px;
    }
    p{
        color: #818181;
        font-weight: 300;
    }
    
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 30px;
        padding-right: 0;
    }
`

const StyledGatsbyImage = styled(GatsbyImage)`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

