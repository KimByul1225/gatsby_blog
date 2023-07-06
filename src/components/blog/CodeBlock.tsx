import React, { useEffect } from "react";
import Prism from "prismjs";

import MarkdownIt from 'markdown-it';

import { MDXProvider} from "@mdx-js/react";

interface ICodeBlock{
    className?: string;
    children: string;
}

const md = new MarkdownIt({
    html: true,
    linkify: false,
});


function CodeBlock({className = "lang-js", children}: ICodeBlock) {
    const language = className.replace("lang-", "");

    console.log("렌더링",typeof children);

    useEffect(() => {
        // if(typeof window !== "undefined"){
        //     Prism.highlightAll();
        // }
        Prism.highlightAll();
    }, []);

    const code = `const App = props => {
            return (
                <div>
                <h1> React App </h1>
                <div>Awesome code</div>
                </div>
            );
        };
    `;


    return (
        <MDXProvider>
            {children}
            {/* <div dangerouslySetInnerHTML={{ __html: md.render(children) }} /> */}
            
        </MDXProvider>
    )
}

export default CodeBlock