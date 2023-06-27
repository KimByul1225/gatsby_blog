import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

export default function blog() {
    return (
        <Layout title="Blog">
            <p>blog text</p>
        </Layout>
    );
}


export const Head = ()=> <Seo title="Blog"/>