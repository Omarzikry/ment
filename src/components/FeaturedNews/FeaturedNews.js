import React, { Component, Fragment } from "react";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./FeaturedNews.css";
import Video from "../UI/Video/Video";
import ReadMoreButton from "../UI/ReadMoreButton/ReadMoreButton";
class FeaturdNews extends Component {
  render() {
    const { articles, loading } = this.props;
    let FeaturedNews = <Spinner />;
    if (!loading) {
      FeaturedNews = articles.map(article => {
        if (article.featured1) {
          let media = article.media.slice(0, 1);
          return (
            <div
              className={[classes.featuredNewsContent, "slide"].join(" ")}
              key={article.id}
            >
              {media.map((mediaFile, index) => {
                return mediaFile.includes(".mp4") ? (
                  <Video
                    className={classes.mediaContent}
                    mediaFile={mediaFile}
                    poster={article.poster}
                    key={article.id + mediaFile}
                  />
                ) : (
                  <img
                    className={classes.mediaContent}
                    src={mediaFile}
                    alt={article.title}
                    key={article.id + mediaFile}
                  />
                );
              })}
              <div className={classes.title}>
                <div>
                  <p className={classes.trendingSubtitle}>Featured News</p>
                  {article.title}
                </div>
              </div>
              <ReadMoreButton bottom="0px" right="0px" />
            </div>
          );
        }
      });
    }
    return <div className={classes.featuredNews}>{FeaturedNews}</div>;
  }
}

export default FeaturdNews;
