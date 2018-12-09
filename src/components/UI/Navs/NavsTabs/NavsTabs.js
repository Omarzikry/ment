import React, { Component } from 'react';
import axios from '../../../../axiosCarouselImages';
import classes from './NavsTabs';
import Spinner from '../../Spinner/Spinner'
class NavsTabs extends Component {

    state = {
        products: [],
        loading: true,
        active: 'casual'
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

            const casualProducts = this.state.products[key].catigory === this.props.active; // <<<<< Here I check if the catigory property inside the object is equal to the active 
                                                                                                //// state recived from the parent so I know what catigory to render
            const src = this.state.products[key];



            // =============================== Here I check if the array of objects meets the condition then turn it into jsx and passing props ===============================//   
            
            if (casualProducts) {
                return (
                    <div className={classes.grid} key={key}>
                        <div className={classes.card}>
                            <img src={src.imageLink} alt={src.name} />
                            <div className={classes.describtion}>
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
            <div>
            {/* // =============================== Checking the loading state before rendering anything ===============================// */}

                {this.state.loading ? <Spinner /> : products}
                {console.log(this.state.loading)}
            </div>
        );
    }
}

export default NavsTabs;

