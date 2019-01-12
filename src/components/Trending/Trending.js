import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import classes from "./Trending.css";
import TrendingLabel from "..//UI/TrendingLabel/TrendingLabel";
import ReadMoreButton from "../UI/ReadMoreButton/ReadMoreButton";
import Video from "../UI/Video/Video";
class Trending extends Component {
  componentDidMount() {
    this.props.onFetchArticles();
  }
  //   handleClick = id => {
  //     this.props.history.push("/blog/" + id);
  //   };
  render() {
    let TrendingPost = null;
    const { loading } = this.props;
    if (!loading) {
      const articles = this.props.articles;
      const articlesViewsArray = [];
      for (let article of articles) {
        articlesViewsArray.push(article.views);
      }
      const heighestViews = Math.max.apply(null, articlesViewsArray);
      articles.map(article => {
        const imageSmall = article.media.slice(0, 1);
        const imageBig = article.media.slice(1, 2);
        if (heighestViews === article.views) {
          TrendingPost = (
            <div className={classes.trendingContainer}>
              {imageBig.map(mediaFile => {
                if (!mediaFile.includes(".mp4")) {
                  return (
                    <div
                      key={article.id}
                      onClick={() => {
                        this.props.click(article.id);
                      }}
                      className={classes.imageContainerBig}
                      //   onClick={this.handleClick.bind(this, article.id)}
                    >
                      <div className={classes.title}>
                        <div>
                          <p className={classes.trendingSubtitle}>Trending</p>
                          {article.title}
                        </div>
                      </div>
                      <img src={mediaFile} alt={article.title} />
                      <ReadMoreButton bottom="0px" right="0px" />
                    </div>
                  );
                }
                return mediaFile;
              })}
              {imageSmall.map(mediaFile => {
                if (!mediaFile.includes(".mp4")) {
                  return (
                    <div
                      key={article.id + 1}
                      onClick={() => {
                        this.props.click(article.id);
                      }}
                      className={classes.imageContainerSmall}
                      //   onClick={this.handleClick.bind(this, article.id)}
                    >
                      <img src={mediaFile} alt={article.title} />
                      <TrendingLabel top="2px" right="2px" />
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={article.id + 1}
                      className={classes.imageContainerSmall}
                      //   onClick={this.handleClick.bind(this, article.id)}
                    >
                      <Video
                        loading={loading}
                        mediaFile={mediaFile}
                        poster={article.poster}
                      />
                      <TrendingLabel top="2px" right="2px" />
                    </div>
                  );
                }
              })}
            </div>
          );
        }
        return TrendingPost;
      });
    }
    return <div>{TrendingPost}</div>;
  }
}
const mapStateToProps = state => {
  return {
    articles: state.articles
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
)(Trending);
