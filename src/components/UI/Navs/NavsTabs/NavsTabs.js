import React, { Component } from 'react';
import NavsLinks from '../NavsLinks/NavsLinks';
//import axios from '../../../../axiosCarouselImages'
class NavsTabs extends Component {
    componentDidMount(){
        // axios.get('/products.json')
        //     .then(res => {
        //         const products = Object.keys(res.data).map(key => {
        //             //console.log(res.data[key])
        //             const casualProducts = res.data[key].catigory === 'casual';
        //             if(casualProducts){
        //              //   console.log(res.data[key])
        //             }
        //             //console.log(casualProducts)
        //         });
        //     })
    }
    render() {
        return (
            <div>
               <NavsLinks /> 
            </div>
        );
    }
}

export default NavsTabs;

