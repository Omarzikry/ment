import React, { Fragment } from "react";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./BlogTrending.css";
import Video from "../UI/Video/Video";
import TrendingLabel from "../UI/TrendingLabel/TrendingLabel";
import { handleDate } from "../../utils";
const BlogTrending = ({ articles, loading, history }) => {
  const handleClick = id => {
    history.push("/blog/" + id);
  };

  let trendingPost = <Spinner />;
  if (!loading) {
    const articlesViewsArray = [];
    for (let article of articles) {
      articlesViewsArray.push(article.views);
    }
    const heighestViews = Math.max.apply(null, articlesViewsArray);
    articles.map(article => {
      if (heighestViews === article.views) {
        const media = article.media.slice(0, 1);
        trendingPost = media.map(mediaFile => {
          if (!mediaFile.includes(".mp4")) {
            return (
              <div
                key={article.id}
                onClick={() => {
                  handleClick(article.id);
                }}
                className={classes.trending}
              >
                <img src={mediaFile} alt={article.title} />
                <div className={classes.text}>
                  <h3 className={classes.articleTitle}>{article.title}</h3>
                  <p className={classes.date}>
                    {handleDate(article.createdDate)}
                  </p>
                </div>
                <TrendingLabel top="5px" right="5px" />
              </div>
            );
          } else {
            return (
              <div key={article.id + 1} className={classes.trending}>
                <Video
                  loading={loading}
                  mediaFile={mediaFile}
                  poster={article.poster}
                />
                <TrendingLabel top="2px" right="2px" />
              </div>
            );
          }
        });
      }
    });
  }
  return <Fragment>{trendingPost}</Fragment>;
};

export default BlogTrending;
