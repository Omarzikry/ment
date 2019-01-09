import React, { Component } from "react";
import classes from "./Slider.css";
import Video from "../../../../components/UI/Video/Video";
class BlogSlider extends Component {
  state = {
    loading: true,
    currentMedia: 0
  };

  componentDidMount() {
    this.setState({ loading: false, hasVideo: false });

    const { media } = this.props;

    //\\ ============ checks if media files has video then set hasVideo state ============ //\\
    media.map(mediaFile => {
      if (mediaFile.includes(".mp4")) {
        this.setState({ hasVideo: true });
      }
      return mediaFile;
    });
  }
  //\\ ============ handle active dot clicked ============ //\\
  handleClick = index => {
    this.setState({ currentMedia: index });
    if (this.state.hasVideo) {
      this.setState({ stopVideo: true });
    }
  };

  render() {
    const { loading, currentMedia, stopVideo } = this.state;
    const { media, id, poster } = this.props;
    const {
      mediaContainer,
      activeMedia,
      dotsContainer,
      currentDot,
      activeDots,
      notActive
    } = classes;
    return (
      <div className={mediaContainer}>
        {media.map((mediaFile, index) => {
          //\\ ============ Render Video ============ //\\
          if (mediaFile.includes(".mp4")) {
            return (
              <Video
                loading={loading}
                mediaFile={mediaFile}
                currentMedia={currentMedia}
                index={index}
                key={id + mediaFile}
                poster={poster}
                externalClass={currentMedia === index ? activeMedia : null}
                pauseVideo={stopVideo}
              />
            );
          } else {
            return (
              //\\ ============ Render Images ============ //\\
              <img
                src={mediaFile}
                alt={this.props.alt}
                key={this.props.id + mediaFile}
                className={currentMedia === index ? activeMedia : notActive}
              />
            );
          }
        })}

        {/* //\\ ============ Render Dots ============ //\\ */}
        <div className={dotsContainer}>
          {media.map((mediaFile, index) => {
            return (
              <div
                className={[
                  activeDots,
                  currentMedia === index ? currentDot : null
                ].join(" ")}
                key={mediaFile + index}
                onClick={this.handleClick.bind(this, index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BlogSlider;
