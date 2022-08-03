import React from 'react'
// import edit from '../Images/edit-2.png';
import '../Style/Checkout5.scss';
import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import twitter from '../Images/twitter.png'


export default function Order() {
  return (
<div className='container'>
      <div className='container-Checkout'>
        <h5 className='main-text'>Order Successful!</h5>
        <hr />
      </div>
      <h3 className='guesth3'>Order Number #1700834</h3>
      <div class="aem-Grid aem-Grid--12">
        <div class="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
          <div className='guest2'>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <h5 className='guesth5'>Shipping Information</h5>
                <p className='guest1'>q_farhan@gmail.com <br />+1 (555) 229-3367</p>
               
                  <p className='guest1'>Qadim Farhan </p>
                  <p className='guest1'> 1098 Wapello Street </p>
                  <p className='guest1'>Altadena, California 91001 </p>
                  <p className='guest1'>United States</p>
                  
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
               
               <h5 className='guesth5'>Shipping Information</h5>
                <p className='guest1'>Standard Shipping <br/>Est. delivery in 4 - 8 business days <br/>FREE</p>
              

              </div>
          
            </div>
          </div>
          
          <div>
         
           
            <div className='guest-2'>
              <div class="aem-Grid aem-Grid--12">

            
                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                 <div className="product">
                  <div>
                  <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" height="120px" width="150px"/>
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
                 <div className="product">
                  <div>
                  <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" height="120px" width="150px"/>
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
               <div className='last-para'>
               <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
               <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
               </div>
          </div>
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
          <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12"></div>
          <div className='pricing-card1' >
            <p>Give us a follow<br/> to SAVE 20% <br/>on your next order.</p>
            <img src={facebook} /> <img src={instagram}/> <img src={twitter}/>
          </div>
        </div>
      </div>
  
     
    </div>
  
   
  )
}