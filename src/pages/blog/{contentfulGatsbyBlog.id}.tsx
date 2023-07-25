import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import Layout from "../../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Row from "../../components/common/Row";
import Comments from "../../components/comment.js";

import { styled } from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";

/**
 * @description Blog의 상세 내용을 보여주기 위한 components
 */


interface IBackground {
    img: string;
}

interface IBlogList {
    contentfulGatsbyBlog: {
        id: string;
        title: string | null;
        date: string | null;
        category: string | null;
        description: string | null;
        detail: any;
        headerImage : { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData | null, readonly file: { readonly url: string | null } | null };
    }
    
}

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => <strong>{text}</strong>,
        [MARKS.CODE]: (text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => {
            return(
                <code>
                    {text}
                </code>
            )
        },
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => {
            if (
                node.content.length === 1 &&
                node.content[0].marks.find((x:any) => x.type === "code")
            ) {
                return <div>{children}</div>;
            }
                return <p>{children}</p>;
        },
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const { gatsbyImageData, title } = node.data.target;
            return (
                <GatsbyImage
                    image={getImage(gatsbyImageData)!}
                    alt={title}
                />
            )
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
            const {code, codeType} = node.data.target?.fields || {};
            console.log("Node", node);
            return (
                    code ? <>
                        <SyntaxHighlighter
                            language={codeType["en-US"]}
                            style={obsidian}
                            showLineNumbers
                        >
                            {code["en-US"]}
                        </SyntaxHighlighter>
                    </>
                    :
                    <SyntaxHighlighter
                        language="html"
                        style={obsidian}
                    >
                        에러가 발생하여, 코드 불러오기에 실패 했습니다.
                    </SyntaxHighlighter>
            )
        },
    },
    renderText: (text: string) => {
        if (!text) return <br />; 
        return text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text]);
    },
}


export default function BlogDetail({data}: {data: IBlogList}) {
    const { contentfulGatsbyBlog } = data;
    const urlPath = `https:${contentfulGatsbyBlog.headerImage?.file?.url}`;
    return (
        <Layout
            title="상세"
        >
            <Background
                img={urlPath}
            />
            <Row>
                <DeatailWrap>
                    <h5>{contentfulGatsbyBlog.category}</h5>
                    <h3>{contentfulGatsbyBlog.title}</h3>
                    <h4>{contentfulGatsbyBlog.description}</h4>
                    <p>{contentfulGatsbyBlog.date}</p>
                </DeatailWrap>
                <Viewer>{renderRichText(contentfulGatsbyBlog.detail, options)}</Viewer>
                <ButtonWrap>
                    <Link to="/blog/">
                        목록
                    </Link>
                </ButtonWrap>
                
                <Comments />

            </Row>
        </Layout>
    )
}
export const query = graphql`
    query Blog($id: String!) {
        contentfulGatsbyBlog(id: {eq: $id}) {
            id
            title
            date(formatString: "YYYY.MM.DD HH:mm")
            category
            description
            detail {
                raw
                references{
                    ... on ContentfulAsset {
                        contentful_id
                        title
                        description
                        gatsbyImageData(placeholder: BLURRED, width: 1000)
                        __typename
                    }
                }
            }
            headerImage {
                gatsbyImageData(placeholder: BLURRED, height: 400)
                file {
                    url
                }
            }
        }
    }
`


const Background = styled.div<IBackground>`
    width: 100%;
    height: 500px;
    background: url(${(props) => props.img}) center no-repeat;
    background-size: cover;
`


const DeatailWrap = styled.div`
    padding-bottom: 30px;
    border-bottom: 1px solid #e4e4e4;
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
        margin-bottom: 50px;
    }
    p{
        color: #818181;
        font-weight: 300;
    }
`

const Viewer = styled.div`
    padding: 30px 10px;
    border-bottom: 1px solid #e4e4e4;
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: revert;
        padding: revert;
        border: revert;
        font-size: revert;
        font: revert;
        vertical-align: revert;
    }
    table {
        border-collapse: revert;
        border-spacing: revert;
    }

    a {
        text-decoration: revert;
    }
    blockquote{
        margin-left: 20px;
        padding-left: 20px;
        border-left: 6px solid rgb(231, 235, 238);
    }
    blockquote, q{
        quotes: revert;
    }
    ol, ul {
        list-style: revert;
    }
    pre{
        border-radius: 5px;
    }
`
const ButtonWrap = styled.div`
    margin-top: 60px;
    padding-bottom: 100px;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;

    a{
        border-radius: 5px;
        display: inline-block;
        font-size: 18px;
        width: 230px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background-color: #ff4d15;
        border: 1px solid #ff4d15;
        color: #fff;
        transition: all .3s ease;
    }
    a:hover{
        background: #fff;
        color: #ff4d15;
        transition: all .3s ease;
    }
    @media screen and (max-width: 768px){
        a{
            font-size: 16px;
            height: 50px;
            line-height: 50px;
            width: 200px;
        }
    }
`