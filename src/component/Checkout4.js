import React from 'react'
import edit from '../Images/edit-2.png';
import { Link } from 'react-router-dom';
import '../Style/Checkout4.scss';

export default function Payment() {
    return (
        <div className='container'>
            <div className='container-Checkout'>
                <h5 className='main-text'>Checkout</h5>
                <hr />
            </div>
            <h3 className='guesth3'>Guest Checkout</h3>
            <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
                    <div className='guest2'>
                        <div class="aem-Grid aem-Grid--12">
                            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <h5 className='guesth5'>Shipping Information</h5>
                                <p className='guest1'>q_farhan@gmail.com <br />+1 (555) 229-3367</p>
                            </div>
                            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <div className='guestp'>
                                    <p>Qadim Farhan </p>
                                    <p> 1098 Wapello Street </p>
                                    <p>Altadena, California 91001 </p>
                                    <p>United States</p>
                                </div>
                            </div>
                            <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <p className='guest3'><img src={edit} />Edit</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='guest-2'>
                            <div class="aem-Grid aem-Grid--12">

                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <h5 className='guesth5'>Shipping Information</h5>
                                    <p className='guest1'>q_farhan@gmail.com <br />+1 (555) 229-3367</p>
                                </div>

                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <p className='guest-3'><img src={edit} />Edit</p>
                                </div>
                            </div>
                        </div>
                        <div className='guest-2'>
                            <div class="aem-Grid aem-Grid--12">

                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <h5 className='guesth5'>Payment Information</h5>
                                    <p className='guest1'>Credit Card  <br />Visa ending in 4567</p>
                                </div>

                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <p className='guest-3'><img src={edit} />Edit</p>
                                </div>
                            </div>
                        </div>
                        <div className='guest-2'>
                            <div class="aem-Grid aem-Grid--12">


                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                    <div className="checkout-pro">
                                        <div>
                                            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
                                        </div>
                                    </div>

                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                    <div className='product-desc'>
                                        <h5>Electric Leggings</h5>
                                        <h6>Size : Medium</h6>
                                        <h6>Color : Storm</h6>
                                        <h6>Quantity: 2</h6>
                                    </div>
                                </div>


                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                    <div className="checkout-pro">
                                        <div>
                                            <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" />
                                        </div>
                                    </div>

                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                    <div className='product-desc'>
                                        <h5>Signature Sports Bra</h5>
                                        <h6>Size : Medium</h6>
                                        <h6>Color :White </h6>
                                        <h6>Quantity: 1</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='main-btn'><p><Link to="/Checkout5">PLACE ORDER</Link></p></button>
                        <p className='main-p'>By clicking confirm order you agree to our <u>Terms and Conditions</u></p>
                    </div>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                    <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12"></div>
                    <div className='pricing-card' >
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 ">
                                <h6>Subtotal</h6>
                                <h6>Coupon</h6>
                                <h6>Gift Card</h6>
                                <h6>Estimated tax</h6>
                                <h6>Estimated shipping</h6>
                                <h6><strong>Estimated Total</strong></h6>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6  text-right">
                                <h6>$ 388.00</h6>
                                <h6>- $ 77.60</h6>
                                <h6>- $ 100.00</h6>
                                <h6>$ 23.28</h6>
                                <h6>FREE</h6>
                                <h6><strong>$ 233.68</strong></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}