import React from 'react';
import LogoImg from '../../assets/images/Logo.png';
import classes from './Navbar.css';
import Navlink from './Navlink/Navlink';
import ToggleBtn from '../UI/ToggleBtn/ToggleBtn';
import BlueBox from '../UI/BlueBox/BlueBox';
import {Route} from 'react-router-dom';
const Navbar = () => {
    return (
        <header className={classes.Navbar}>
            <nav>
                <ToggleBtn></ToggleBtn>
                <ul className={classes.leftNav}>
                    <Navlink goTo="/">Home</Navlink>
                    <Navlink goTo="/shop">Shop</Navlink>
                    <Navlink goTo="/blog">Blog</Navlink>
                </ul>
                <div className={classes.logo}><img src={LogoImg} alt="Ment logo"/></div>
                <ul className={classes.rightNav}>
                    <Navlink goTo="/blog"><i className="fas fa-search"></i></Navlink>
                </ul>
            </nav>
            <Route path="/" exact render={props => <BlueBox width="600px" height="500px" top="0" right="0" />}/>
        </header>
    );
}

export default Navbar;
