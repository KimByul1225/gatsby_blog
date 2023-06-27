import React from 'react';
import { Link } from "gatsby";


function Haeder() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    )
}

export default Haeder