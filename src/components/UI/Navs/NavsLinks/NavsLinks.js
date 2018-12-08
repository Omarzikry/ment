import React, { Component } from 'react';
import axios from '../../../../axiosCarouselImages';
import NavsLink from './NavsLink/NavsLink';
import classes from './NavsLinks.css'
class NavsLinks extends Component {
    state = {
        categories: null,
        loading: true,
        selected: 'casual'
    }
    componentDidMount(){
        axios.get('/categories.json')
            .then(res => {
                this.setState({categories: res.data , loading: false})
            })
    }
    componentDidUpdate(){
        if(this.state.active !== true){
            this.setState({active: true})
        }
    }
    handleClick = (index , elm) => {
        console.log(index , elm);
        this.setState({selected: elm})
    }
    render() {
        let categories = null;
        if(this.state.loading !== true){
            categories = Object.keys(this.state.categories).map((key , index) => {
                return <NavsLink id={this.state.categories[key]} active={this.state.categories[key] === this.state.selected ? true : null} key={key} click={this.handleClick.bind(this, index , this.state.categories[key])}>{this.state.categories[key]}</NavsLink>
            }); 
        }
        return (
            <div className={classes.NavsLinks}>
                {categories}
            </div>
        );
    }
}

export default NavsLinks;

