import React, { useEffect } from 'react';

/**
 * @description 댓글기능을 위한 component
 */

const COMMENTS_ID = 'comments-container';
const Comments = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.setAttribute('repo', 'KimByul1225/gatsby_blog_comments');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('theme', 'github-light'); //github-ligh
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        const comments = document.getElementById(COMMENTS_ID);
        if (comments) comments.appendChild(script);

        // This function will get called when the component unmounts
        // To make sure we don't end up with multiple instances of the comments component
        return () => {
            const comments = document.getElementById(COMMENTS_ID);
            if (comments) comments.innerHTML = '';
        };
    }, []);

    return (
        <div id={COMMENTS_ID} />
    );
};

export default Comments;