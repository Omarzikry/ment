import React, { Component, Fragment } from "react";
import classes from "./Post.css";
import Intro from "./Intro/Intro";
import axios from "../../../axios";
import Spinner from "../../../components/UI/Spinner/Spinner";
import BlogSlider from "./Slider/Slider";
import MidSection from "./MidSection/MidSection";
import Trending from "../../../components/Trending/Trending";
import MovingColors from "../../../components/UI/MovingColors/MovingColors";
import EndSection from "./EndSection/EndSection";
import SimilarPosts from "../../../components/SimilarPosts/SimilarPosts";
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
      })
      .catch(err => {
        console.log(err);
      });
    //console.log(this.props.history.location.key);
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      match: { params }
    } = this.props;
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo(0, 0);
      //\\ ============= Get the New Post ========== //\\
      axios
        .get(`articles/${params.id}.json`)
        .then(res => {
          this.setState({
            singlePostData: res.data,
            loading: false
          });
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  trendingClickHandler = id => {
    this.props.history.push("/blog/" + id);
  };
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
        content,
        quoteData,
        endContent,
        endContentTitle
      } = singlePostData;
    return (
      <Fragment>
        {!loading ? (
          <div>
            <MovingColors color="white" key={id} />
            <MovingColors color="black" key={id + 1} />
          </div>
        ) : null}
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
              key={id + authorImage}
            />
            <MidSection content={content} quoteData={quoteData} />
            <Trending click={this.trendingClickHandler} />
            <EndSection content={endContent} title={endContentTitle} />
            <SimilarPosts
              history={this.props.history}
              title="You may also like"
            />
          </div>
        ) : (
          <Spinner />
        )}
      </Fragment>
    );
  }
}

export default Post;
