import React, { Component, Fragment } from "react";
import classes from "./Video.css";
import Spinner from "../Spinner/Spinner";
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true
    };
    this.video = React.createRef();
  }
  componentDidUpdate(prevProps, prevState) {
    const video = this.video;
    if (prevProps.pauseVideo !== this.props.pauseVideo) {
      if (this.props.pauseVideo === true) {
        video.current.pause();
        this.setState({ play: true });
      }
    }
  }

  //\\ ========== handle video click play/pause ========== //\\
  handleVideoClick = () => {
    const video = this.video;
    if (video.current.paused === true) {
      // Play the video
      video.current.play();
      this.setState({ play: false });
    } else {
      // Pause the video
      video.current.pause();
      this.setState({ play: true });
    }
  };
  videoEndedHanlder = () => {
    this.setState({ play: true });
  };

  render() {
    const { loading, index, mediaFile, poster, externalClass } = this.props;
    const { play } = this.state;
    const { videoContainer, video, strokesolid, strokedotted } = classes;
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
      <Fragment>
        {!loading ? (
          <div
            className={[videoContainer, externalClass].join(" ")}
            key={index + mediaFile}
          >
            <video
              onEnded={this.videoEndedHanlder}
              poster={poster}
              ref={this.video}
              className={[video, externalClass].join(" ")}
              id="video"
            >
              <source src={mediaFile} type="video/mp4" />
            </video>
            <svg
              onClick={this.handleVideoClick.bind(this)}
              id={classes.play}
              xmlns="http://www.w3.org/2000/svg"
              height="100"
              width="100"
              viewBox="0 0 100 100"
            >
              <path
                className={strokesolid}
                fill="none"
                stroke="#fff"
                d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
              />
              <path
                className={strokedotted}
                fill="none"
                stroke="#fff"
                d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
              />
              {icon}
            </svg>
          </div>
        ) : (
          <Spinner />
        )}
      </Fragment>
    );
  }
}

export default Video;
