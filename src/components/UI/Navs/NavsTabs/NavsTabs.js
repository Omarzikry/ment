import React, { Component } from 'react';
import axios from '../../../../axiosCarouselImages';
import classes from './NavsTabs.css';
import Spinner from '../../Spinner/Spinner';
import Card from '../../Card/Card';
class NavsTabs extends Component {

    state = {
        products: [],
        loading: true,
        activeProduct: null,
        fullImages: [],
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

    cancelClick = () => {
        this.setState({activeProduct: null});
        function reloadScrollBars() {
            document.documentElement.style.overflow = 'auto';  // firefox, chrome
            document.body.scroll = "yes"; // ie only
        }
        reloadScrollBars();
    }
    
    cardClicked = (index) => {
        this.setState({activeProduct: index});
    }

    render() {
        // =============================== Here I take the products state which contains object contains objects ===============================//
        const products = Object.keys(this.state.products).map((key , index) => {

            // =============================== I turned it into array then mapped it ===============================//

            const rightCategory = this.state.products[key].categoryId === this.props.active; // <<<<< Here I check if the category property inside the object is equal to the active 
                                                                                                //// state recived from the parent so I know what category to render
            const src = this.state.products[key];
            //console.log(src.fullImages)
            // =============================== Here I check if the array of objects meets the condition then turn it into jsx and passing props ===============================//   
            
            if (rightCategory) {
                return (
                    <Card productImage={src.imageLink} productImageAlt={src.name} opened={this.state.activeProduct === index ? true : false}  name={src.name} brand={src.Brand} click={this.cardClicked.bind(this , index)} key={key} active={this.state.activeProduct === index ? true : false} id={'product' + src.id} fullImages={src.fullImages} cancelClicked={this.cancelClick}/>
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

