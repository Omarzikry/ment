import React, { Component } from 'react';
import axios from '../../../../axiosCarouselImages';
import classes from './NavsTabs.css';
import Spinner from '../../Spinner/Spinner';
import arrowImg from '../../../../assets/images/Arrow-UP-Right.png'
class NavsTabs extends Component {

    state = {
        products: [],
        loading: true,
    }

    componentDidMount() {
        axios.get('/products.json')
            .then(res => {
                this.setState({ products: res.data, loading: false })
            })
            .catch(error => {
                console.log(error)
            })

    }
    render() {
        // =============================== Here I take the products state which contains object contains objects ===============================//
        const products = Object.keys(this.state.products).map(key => {

            // =============================== I turned it into array then mapped it ===============================//

            const casualProducts = this.state.products[key].categoryId === this.props.active; // <<<<< Here I check if the catigory property inside the object is equal to the active 
                                                                                                //// state recived from the parent so I know what catigory to render
            const src = this.state.products[key];



            // =============================== Here I check if the array of objects meets the condition then turn it into jsx and passing props ===============================//   
            
            if (casualProducts) {
                return (
                        <div className={classes.card} key={key}>
                            <img src={src.imageLink} alt={src.name} className={classes.productImage} />
                            <div className={classes.overlay}>
                                <span className={classes.circle}><img src={arrowImg} alt="" /></span>
                                <div className={classes.text}>
                                <h3>{src.name}</h3>
                                <p>{src.Brand}</p>
                                </div>
                            </div>
                        </div>
                );
            };
            return null
        });

        return (
            <div className={classes.Grid}>
            {/* // =============================== Checking the loading state before rendering anything ===============================// */}

                {this.state.loading ? <Spinner /> : products}
            </div>
        );
    }
}

export default NavsTabs;

