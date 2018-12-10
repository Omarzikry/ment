import React, { Component } from 'react';
import classes from './ActiveDots.css'
class ActiveDots extends Component {
    state = {
        imageNumbers: [],
        addToArray: true
    }
    componentDidUpdate(){
            if(this.state.addToArray){
                for(let i = 0 ; i < this.props.imagesNumber ; i++){
                    var counter = i + 1;
                    this.state.imageNumbers.push(counter)
                }
                this.setState({addToArray: false})
            }
    }
    handleClick = (index) => {
        this.props.callIndex(index)
    }
    render() {
            const dots = this.state.imageNumbers.map(imageDot => {
                return <p key={imageDot}className={this.props.currentIndex + 1 === imageDot ? classes.active : null} onClick={this.handleClick.bind(this , imageDot - 1)}> 0{imageDot}</p>
            })
        return (
            <div className={classes.dots}>
                {this.state.addToArray ? null :dots}
            </div>
        );
    }
}

export default ActiveDots;

