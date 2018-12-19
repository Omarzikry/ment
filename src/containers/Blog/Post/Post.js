import React, { Component } from 'react';
import classes from './Post.css';
import Intro from './Intro/Intro';
class Post extends Component {
    render() {
        return (
            <div className={classes.post}>
                <Intro />
            </div>
        );
    }
}

export default Post;
