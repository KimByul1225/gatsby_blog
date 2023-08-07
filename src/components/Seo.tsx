import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
interface ISeoProps {
    title : string
}

/**
 * @description title을 위한 Seo를 위해 추가요소를 더 넣으려면 해당 컴포넌트에서 작업 할 것.
 */

export default function Seo({title}: ISeoProps) {
    const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
        query SeoData {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <title>{title}</title>
        // <title>{title} | {data.site?.siteMetadata?.title}</title>
    )
}
