// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import '../Style/Checkout1.scss'


// export default function Checkout() {
//   return (
//     <div className='container'>
//       <div className='container-Checkout'>
//         <h5 className='main-text'>Checkout</h5>
//         <hr />
//       </div>
//       <div class="aem-Grid aem-Grid--12">
//         <div class="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
//           <div className='guestcheckout'>
//             <h4>Guest Checkout</h4>
//             <p>Contact information</p>
//             <p>We’ll use these details to keep you informed on your delivery.</p>
//           </div>
//           <Form>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="abc@xyz.com" />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridPassword">
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control type="password" placeholder="(222) 222-2222" />
//               </Form.Group>
//             </Row>
//             <Row className="mb-4">
//               <Form.Group as={Col} controlId="formGridState">
//                 <Form.Label>State</Form.Label>
//                 <Form.Select defaultValue="Choose...">
//                   <option>Choose...</option>
//                   <option>...</option>
//                 </Form.Select>
//               </Form.Group>
//             </Row>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridEmail">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control type="email" />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridPassword">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control type="password" />
//               </Form.Group>
//             </Row>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridEmail">
//                 <Form.Label>Street Address</Form.Label>
//                 <Form.Control type="email" />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridPassword">
//                 <Form.Label>Street Address 2</Form.Label>
//                 <Form.Control type="password" />
//               </Form.Group>
//             </Row>




//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridCity">
//                 <Form.Label>City</Form.Label>
//                 <Form.Control />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridState">
//                 <Form.Label>State</Form.Label>
//                 <Form.Select defaultValue="Choose...">
//                   <option>California</option>
//                   <option>...</option>
//                 </Form.Select>
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridZip">
//                 <Form.Label>Zip</Form.Label>
//                 <Form.Control type="password" placeholder="91001" />

//               </Form.Group>
//             </Row>

//           </Form>
//           <button className='btn-shipping-1'><p>CONTINUE TO SHIPPING METHOD</p></button>

//         </div>
//         <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
//           <div className='signin-check'>
//             <div className="aem-Grid aem-Grid--12">
//               <div className="aem-GridColumn aem-GridColumn--default--6 ">
//                 <h5>Sign in for Express <br />Checkout</h5>
//               </div>
//               <div className="aem-GridColumn aem-GridColumn--default--6 ">
//                 <button className='signin-btn'><p>SIGN IN</p></button>
//               </div>
//             </div>
//           </div>
//           <div className='pricing-card' >
//             <div className="aem-Grid aem-Grid--12">
//               <div className="aem-GridColumn aem-GridColumn--default--6 ">
//                 <h6>Subtotal</h6>
//                 <h6>Coupon</h6>
//                 <h6>Gift Card</h6>
//                 <h6>Estimated tax</h6>
//                 <h6 className='h18'>Estimated shipping</h6>
//                 <h6><strong>Estimated Total</strong></h6>
//               </div>
//               <div className="aem-GridColumn aem-GridColumn--default--6  text-right">
//                 <h6>$ 388.00</h6>
//                 <h6>- $ 77.60</h6>
//                 <h6>- $ 100.00</h6>
//                 <h6>$ 23.28</h6>
//                 <h6>FREE</h6>
//                 <h6><strong>$ 233.68</strong></h6>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }
import React from 'react';
import '../Style/Checkout1.scss'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

export default function Checkout1() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className='container'>
      <div className='container-Checkout'>
        <h5 className='main-text'>Checkout</h5>
        <hr />
      </div>
      <div class="aem-Grid aem-Grid--12">
        <div class="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
          <div className='guestcheckout'>
            <h4>Guest Checkout</h4>
            <h6>Contact information</h6>
            <p>We’ll use these details to keep you informed on your delivery.</p>
          </div>

          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}></form>
              <label for="Email">Email</label><br />

              <input {...register("Email")} placeholder="abc@xyz.com" className='fname' />
              <p className='shipping-info'>1. Shipping Information</p>
              <label for="Country">Country</label><br />

              <input {...register("Country")} placeholder="United States" className='fname' /><br />
              <label for="First Name">First Name</label><br />

              <input {...register("First Name")} placeholder="First Name" className='fname' /><br />
              <label for="Street Address">Street Address</label><br />

              <input {...register("Street Address")} placeholder="Street Address" className='fname' /><br />
              <label for="City">City</label><br />

              <input {...register("City")} placeholder="Altadena" className='fname' /><br />

            </div>
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}></form>
              <label for="Phone Number">Phone Number</label><br />
              <input {...register("Phone Number")} placeholder="Phone Number" className='fname' />
              <label for="Last Name" className='last12'>Last Name</label><br />
              <input {...register("Last Name")} className='fname' />
              <label for="Street Address 2">Street Address 2</label><br />
              <input {...register("Street Address 2")} className='fname' />

              <label for="State">State</label> <label for="ZIP">ZIP</label><br />
              <input {...register("State")} placeholder="California" className='f1name' />

              <input {...register("ZIP")} placeholder="91001" className='f2name' />



            </div>

            <button className='btn-shipping-1'><p><Link to="/Checkout2">CONTINUE TO SHIPPING METHOD</Link></p></button>
            <hr />
            <p>2. Shipping Method</p>
            <p>3. Payment Information</p>
            <hr />
          </div>
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
          <div className='signin-check'>
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6 ">
                <h5>Sign in for Express <br />Checkout</h5>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--6 ">
                <button className='signin-btn'><p><Link to="/Signin">SIGN IN</Link></p></button>
              </div>
            </div>
          </div>
          <div className='pricing-card' >
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6 ">
                <h6>Subtotal</h6>
                <h6>Coupon</h6>
                <h6>Gift Card</h6>
                <h6>Estimated tax</h6>
                <h6 className='h18'>Estimated shipping</h6>
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

  );
}
