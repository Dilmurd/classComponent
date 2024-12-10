import React, { Component } from 'react'
import "./Product.scss"
import capuc from "../../assets/capuc.png"
import axios from 'axios';
export default class Product extends Component {
    constructor(){
        super();
        this.state = {
            data: null
        }
    }
    componentDidMount(){
        axios
            .get("https://dummyjson.com/products")
            .then(res => this.setState({data: res.data.products}))

    }
  render() {
    return (
        <main>
            <section className="product">
                <div className="container">
                    <div className="product__titles">
                        <p className='product__title'>Popular Product</p>
                        <p className='product__subtitle'>Coffee popular Product</p>
                    </div>
                    <div className="product__wrapper">
                        {
                            this.state.data?.map((product) => (
                        <div className="product__card">
                                <img src={product.thumbnail} alt="" />
                            <div className='product__text'>
                                <p className='product__info'>{product.title}</p>
                                <p className='product__price'>{product.price}</p>
                            </div>
                        </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
  }
}
