import React, { Component } from "react";
import classes from "./Slider.css";

class BlogSlider extends Component {
  state = {
    loading: true,
    play: true,
    currentMedia: 0
  };

  componentDidMount() {
    this.setState({ loading: false });

    //\\ ============ checks if media files has video then set hasVideo state ============ //\\
    this.props.media.map(mediaFile => {
      if (mediaFile.includes(".mp4")) {
        this.setState({ hasVideo: true });
      }
      return mediaFile;
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.hasVideo && prevState.hasVideo !== this.state.hasVideo) {
      // ===== \\ PLAY BUTTON // ===== \\
      let playButton = document.getElementById(classes.play);
      let video = document.getElementById("video");
      // Event listener for the play/pause button
      playButton.addEventListener("click", () => {
        if (video.paused === true) {
          // Play the video
          video.play();
          this.setState({ play: false });
        } else {
          // Pause the video
          video.pause();
          this.setState({ play: true });
        }
      });
    }
  }

  //\\ ============ handle active dot clicked ============ //\\
  handleClick = index => {
    this.setState({ currentMedia: index });
  };

  render() {
    const { loading, play, currentMedia } = this.state;

    //\\ ============ setting play icon ============ //\\
    let icon = (
      <path
        className={classes.icon}
        fill="#fff"
        d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
      />
    );
    if (!loading && !play) {
      icon = (
        <g className={classes.iconPause}>
          <path
            fill="#fff"
            d="M57.51,26.63h10.8a1.22,1.22,0,0,1,1.22,1.21V75.16a1.22,1.22,0,0,1-1.22,1.22H57.51a1.22,1.22,0,0,1-1.22-1.22V27.84A1.22,1.22,0,0,1,57.51,26.63Z"
            transform="translate(-1.99 -2)"
          />
          <path
            fill="#fff"
            d="M34.68,26.63H45.49a1.22,1.22,0,0,1,1.22,1.21V75.16a1.22,1.22,0,0,1-1.22,1.22H34.68a1.21,1.21,0,0,1-1.21-1.22V27.84A1.21,1.21,0,0,1,34.68,26.63Z"
            transform="translate(-1.99 -2)"
          />
        </g>
      );
    }
    if (!loading && play) {
      icon = (
        <path
          className={classes.icon}
          fill="#fff"
          d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
        />
      );
    }
    return (
      <div className={classes.mediaContainer}>
        {this.props.media.map((mediaFile, index) => {
          //\\ ============ Render Video ============ //\\
          if (mediaFile.includes(".mp4")) {
            return (
              <div
                className={[
                  classes.videoContainer,
                  currentMedia === index ? classes.activeMedia : null
                ].join(" ")}
                key={this.props.id + mediaFile}
              >
                <video
                  muted
                  poster={this.props.poster}
                  className={[
                    classes.video,
                    currentMedia === index ? classes.activeMedia : null
                  ].join(" ")}
                  id="video"
                >
                  <source src={mediaFile} type="video/mp4" />
                </video>
                <svg
                  id={classes.play}
                  xmlns="http://www.w3.org/2000/svg"
                  height="100"
                  width="100"
                  viewBox="0 0 100 100"
                >
                  <path
                    className={classes.strokesolid}
                    fill="none"
                    stroke="#fff"
                    d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
                  />
                  <path
                    className={classes.strokedotted}
                    fill="none"
                    stroke="#fff"
                    d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
                  />
                  {icon}
                </svg>
              </div>
            );
          } else {
            return (
              //\\ ============ Render Images ============ //\\
              <img
                src={mediaFile}
                alt={this.props.alt}
                key={this.props.id + mediaFile}
                className={currentMedia === index ? classes.activeMedia : null}
              />
            );
          }
        })}

        {/* //\\ ============ Render Dots ============ //\\ */}
        <div className={classes.dotsContainer}>
          {this.props.media.map((mediaFile, index) => {
            return (
              <span
                className={[
                  classes.activeDots,
                  currentMedia === index ? classes.currentDot : null
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
