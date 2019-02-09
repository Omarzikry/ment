import React, { Component } from "react";
import classes from "./BlogPostsGrid.css";
import Spinner from "../UI/Spinner/Spinner";
import Video from "../UI/Video/Video";
import { handleDate } from "../../utils";
class BlogPostsGrid extends Component {
  render() {
    const { loading, articles } = this.props;
    let vertical = <Spinner />;
    const firstArticle = articles.slice(0, 1);
    if (!loading) {
      vertical = firstArticle.map(article => {
        const firstMedia = article.media.slice(0, 1);
        return (
          <div key={article.id} className={classes.vertical}>
            {firstMedia.map(mediaFile => {
              if (mediaFile.includes(".mp4")) {
                return (
                  <div
                    className={classes.videoContainer}
                    key={article.id + mediaFile}
                  >
                    <Video
                      externalClass={classes.content}
                      mediaFile={mediaFile}
                      poster={article.videoPoster}
                    />
                  </div>
                );
              } else {
                return <img className={classes.content} src={mediaFile} />;
              }
            })}
            <div className={classes.text}>
              <h2 className={classes.articleTitle}>{article.title}</h2>
              <p className={classes.date}>{handleDate(article.createdDate)}</p>
            </div>
          </div>
        );
      });
    }
    return (
      <div className={classes.BlogPostsGrid}>
        {vertical}
        <div className={[classes.smallItem, classes.small1].join(" ")} />
        <div className={[classes.smallItem, classes.small2].join(" ")} />
        <div className={[classes.smallItem, classes.small3].join(" ")} />
        <div className={[classes.smallItem, classes.small4].join(" ")} />
      </div>
    );
  }
}

export default BlogPostsGrid;
