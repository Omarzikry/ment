import React from 'react';
import Post from './Post/Post';
import {Route} from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <Route path="/blog/:id" component={Post}/>
        </div>
    );
}

export default Blog;
