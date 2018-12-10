import React, { Component } from 'react';
import NavsLinks from './NavsLinks/NavsLinks';
import NavsTabs from './NavsTabs/NavsTabs';
import classes from './Navs.css'

class Navs extends Component {

    state = {
        activeLink: '2',
        loading: true
    }

    myCallback = (dataFromChild) => {
        this.setState({ activeLink: dataFromChild , loading: false });
        //console.log(dataFromChild + 'data from child')
    }

    componentDidUpdate(){
        console.log(this.state.activeLink)
    }

    render() {
        return (
            <div className={classes.navs}>
                <NavsLinks callbackFromParent={this.myCallback} />
            <NavsTabs active={this.state.activeLink}/>
            </div>
        );
    }
}

export default Navs;

