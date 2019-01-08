import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../../store/actions/index";
import classes from "./Trending.css";
import TrendingLabel from "../../../../components/UI/TrendingLabel/TrendingLabel";
import ReadMoreButton from "../../../../components/UI/ReadMoreButton/ReadMoreButton";
import Video from "../../../../components/UI/Video/Video";
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
          console.log(article);
          TrendingPost = (
            <div
              className={classes.trendingContainer}
              onClick={() => {
                this.props.click(article.id);
              }}
            >
              {imageBig.map(mediaFile => {
                if (!mediaFile.includes(".mp4")) {
                  return (
                    <div
                      key={article.id}
                      className={classes.imageContainerBig}
                      //   onClick={this.handleClick.bind(this, article.id)}
                    >
                      <div className={classes.title}>
                        <div>
                          <p className={classes.trendingSubtitle}>Trending</p>
                          {article.title}
                        </div>
                      </div>
                      <img src={mediaFile} />
                      <ReadMoreButton bottom="0px" right="0px" />
                    </div>
                  );
                }
              })}
              {imageSmall.map(mediaFile => {
                if (!mediaFile.includes(".mp4")) {
                  return (
                    <div
                      key={article.id + 1}
                      className={classes.imageContainerSmall}
                      //   onClick={this.handleClick.bind(this, article.id)}
                    >
                      <img src={mediaFile} />
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
