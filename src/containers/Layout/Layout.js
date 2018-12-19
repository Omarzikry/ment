import React , {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Layout = (props) => {
    return (
        <Fragment>
            <Navbar />
            {props.children}
        </Fragment>
    );
}

export default Layout;
