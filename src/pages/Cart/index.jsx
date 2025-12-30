import React from 'react'
import ProductListing from '../../components/ProductListing'
import { BiRupee } from 'react-icons/bi'
import { HiArrowLongRight } from "react-icons/hi2";
import Button from '@mui/material/Button'

function Cart() {
  return (
    <div className='main-wrap pt-3'>
        <section className='section'>
            <div className="container">
                <div className="section-title">
                    <h1>Your Cart</h1>
                    <p>There are 3 products in your cart.</p>
                </div>
                <div className="cart-wrap">
                    <div className="row">
                        <div className="col-lg-8">
                            <ProductListing />
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-total">
                                <div className="cart-total-header">
                                    <h3>Cart Total</h3>
                                </div>
                                <div className="ct-body">
                                    <div className="ct-row d-flex align-items-center justify-content-between">
                                        <span className='text'>Subtotal</span>
                                        <span className='sbt'><BiRupee />219.00</span>
                                    </div>
                                    <div className="ct-row d-flex align-items-center justify-content-between">
                                        <span className='text'>Discounts</span>
                                        <span className='sbt'><BiRupee />0</span>
                                    </div>
                                    <div className="ct-row d-flex align-items-center justify-content-between">
                                        <span className='text'>Shipping</span>
                                        <span className='sbt'>Free</span>
                                    </div>
                                    <div className="ct-row d-flex align-items-center justify-content-between">
                                        <span className='text'>Payable Total</span>
                                        <span className='sbt'><BiRupee />219.00</span>
                                    </div>
                                    <div className="big-btn">
                                        <Button className='common-btn btn-bg'>Proceed To Checkout <HiArrowLongRight /></Button>
                                    </div>
                                </div>                                                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Cart