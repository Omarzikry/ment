import React, { Component } from 'react';
import axios from '../../../../axiosCarouselImages';
import NavsLink from './NavsLink/NavsLink';
import classes from './NavsLinks.css';
class NavsLinks extends Component {
    state = {
        categories: null,
        loading: true,
        selected: '2'
    }
    componentDidMount(){
        axios.get('/categories.json')
            .then(res => {
                this.setState({categories: res.data , loading: false})
            });          
    }
    componentDidUpdate(prevProps , prevState){
        if(this.state.active !== true){
            this.setState({active: true})
        }
    }
    handleClick = (index , elm) => {
        console.log(index , elm);
        this.props.callbackFromParent(elm.id)
        this.setState({selected: elm.id});
    }
    render() {
        let categories = null;
        if(this.state.loading !== true){
            categories = Object.keys(this.state.categories).map((key , index) => {
                return <NavsLink id={this.state.categories[key].id} active={this.state.categories[key].id === this.state.selected ? true : null} key={key} click={this.handleClick.bind(this, index , this.state.categories[key])}>{this.state.categories[key].name}</NavsLink>
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

