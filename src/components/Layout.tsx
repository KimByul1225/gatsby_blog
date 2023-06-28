import React from 'react';
import Haeder from './Haeder';
import Footer from './Footer';


interface ILayoutProps{
    children: any;
    title: string;
}

/**
 * @description layout components header와 footer를 포함하고 있음
 */

function Layout({children, title}: ILayoutProps) {
    return (
        <div className="container">
            <Haeder/>
            <main>
                <h1>{title}</h1>
                {children}
            </main>
            <hr />
            <Footer/>
        </div>
    );
}

export default Layout;

