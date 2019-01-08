import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../../store/actions/index";
import classes from "./SimilarPosts.css";
class SimilarPosts extends Component {
  componentDidMount() {
    this.props.onFetchArticles();
  }
  render() {
    return (
      <Fragment>
        <h2 className={classes.title}>You may also like</h2>
        <div className={classes.cardContainer}>
          {this.props.articles.map(article => {
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
                        <video>
                          <source src={mediaFile} />
                        </video>
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
                      this.props.click(article.id);
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
