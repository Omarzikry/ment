import React, { Component, Fragment } from "react";
import classes from "./Post.css";
import Intro from "./Intro/Intro";
import axios from "../../../axios";
import Spinner from "../../../components/UI/Spinner/Spinner";
import BlogSlider from "./Slider/Slider";
import MidSection from "./MidSection/MidSection";
class Post extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    axios
      .get(`articles/${params.id}.json`)
      .then(res => {
        this.setState({ singlePostData: res.data, loading: false });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      match: { params }
    } = this.props;
    const { singlePostData } = this.state;
    //\\ ============= Increment Post Views ============= //\\
    if (prevState.singlePostData !== singlePostData) {
      axios
        .put(`articles/${params.id}.json`, {
          ...this.state.singlePostData,
          views: this.state.singlePostData.views + 1
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    const {
        singlePostData: { ...singlePostData },
        loading
      } = this.state,
      {
        title,
        introParagraph,
        author,
        authorImage,
        media,
        id,
        videoPoster,
        content
      } = singlePostData;
    return (
      <Fragment>
        {!loading ? (
          <div className={classes.post}>
            <Intro
              title={title}
              intro={introParagraph}
              author={author}
              date={"22/11/2015"}
              authorImage={authorImage}
            />
            <BlogSlider
              media={media}
              id={id}
              alt={title}
              poster={videoPoster}
            />
            <MidSection content={content} />
          </div>
        ) : (
          <Spinner />
        )}
      </Fragment>
    );
  }
}

export default Post;
