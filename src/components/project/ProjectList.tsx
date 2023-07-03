import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled } from 'styled-components';
import TagList from '../common/TagList';

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
        detail: (string | null)[];
        tag: (string | null)[];
        headerImage:  { readonly childImageSharp: { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData } | null };
    }
}

function ProjectDetail({item}: {item: (string | null)[]}) { 
    return(
        <ul>
            {
                item.length != 0 && item.map((el, index) => {
                    return(
                        <li key={index}>
                            {el}
                        </li>
                    )
                })
            }
        </ul>
    )
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
                                <ProjectDetail
                                    item={item.frontmatter?.detail}
                                />
                                <TagList
                                    item={item.frontmatter?.tag}
                                />
                            </DeatailWrap>
                            <StyledGatsbyImage 
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
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e4e4e4;
    &:first-child{
        border-top: 1px solid #e4e4e4;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse
    }
`

const DeatailWrap = styled.div`
    width: 50%;
    h5{
        color: #ff4d15;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    h3{
        margin-bottom: 10px;
        font-size: 28px;
        font-weight: 600;
    }
    h4{
        margin-bottom: 10px;
    }
    p{
        color: #818181;
        font-weight: 300;
        margin-bottom: 10px;
    }
    ul{
        margin-bottom: 20px;
    }
    li{
        list-style: inside;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 30px;
    }
`

const StyledGatsbyImage = styled(GatsbyImage)`
    width: 50%;
    border: 1px solid #eee;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`