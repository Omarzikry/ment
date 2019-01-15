import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import classes from "./SimilarPosts.css";
import Video from "../UI/Video/Video";
class SimilarPosts extends Component {
  componentDidMount() {
    this.props.onFetchArticles();
  }
  //\\ =========== routing to post id =========== //\\
  clickHandler = id => {
    this.props.history.push("/blog/" + id);
  };
  render() {
    const { articles } = this.props;
    const slicedArticles = articles.slice(0, 3);
    return (
      <Fragment>
        <h2 className={classes.title}>{this.props.title}</h2>
        <div className={classes.cardContainer}>
          {slicedArticles.map(article => {
            const articleMedia = article.media.slice(0, 1);
            return (
              <div key={article.id} className={classes.card}>
                {articleMedia.map(mediaFile => {
                  if (mediaFile.includes(".mp4")) {
                    return (
                      <div
                        key={article.id + mediaFile}
                        className={classes.videoContainer}
                      >
                        <Video mediaFile={mediaFile} poster={article.poster} />
                      </div>
                    );
                  } else {
                    return (
                      <img
                        src={mediaFile}
                        alt={article.title}
                        key={article.id + mediaFile}
                      />
                    );
                  }
                })}
                <div>
                  <p
                    className={classes.articleTitle}
                    onClick={e => {
                      e.preventDefault();
                      this.clickHandler(article.id);
                    }}
                  >
                    {article.title}
                  </p>
                  <p className={classes.date}>8 March, 2020</p>
                </div>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchArticles: () => {
      dispatch(actionCreators.fetchArticles());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarPosts);
