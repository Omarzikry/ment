import React, { Component } from 'react';
import classes from './Post.css';
import Intro from './Intro/Intro';
class Post extends Component {
    state = {
        id: 1
    }
    render() {
        return (
            <div className={classes.post}>
                <Intro title={this.props.match.params.id} />
            </div>
        );
    }
}

export default Post;
