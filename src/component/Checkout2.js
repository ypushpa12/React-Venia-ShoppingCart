import React from 'react'
import edit from '../Images/edit-2.png';
import '../Style/Checkout2.scss';
export default function Guestcheckout() {
  return (
    <>

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
            <h6 className='guest4'>2. Shipping Method</h6>
            <div className='check2'>
              <input type="radio" id="html" value="HTML" />
              <label for="html">Standard Shipping (4-8 business days via USPS) FREE</label><br />
              <input type="radio" id="html" value="HTML" />
              <label for="html">Express Delivery (2-5 business days via USPS) $17.95</label><br />
              <input type="radio" id="html" value="HTML" />
              <label for="html">Next Day Delivery (Next business days via FedEx) $53.61</label><br />
              <button className='main-btn'><p>CONTINUE TO PAYMENT</p></button>
              <p>3. Payment Information</p>
            </div></div>

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
    </>
  )
}
