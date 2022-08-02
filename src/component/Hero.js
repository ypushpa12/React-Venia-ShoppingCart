import React from 'react'
import "../Style/Hero.scss"
// import maxwidth from "../Images/max-width_header.jpg"

function Hero() {
  return (
    <div class="container-fluid">
        <div className='main'>
        
        <div className='hero-sec'>
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--4">
              <div class="card_1">
                <div class="card_1-body">
                  <h5 class="card_1_title">Men’s <br/>Outerwear</h5>
                  {/* <div className='lines'>
                    <hr />
                  </div> */}
                </div>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--8">
              <div class="card-img">
                <img src="https://static.fibre2fashion.com/articleresources/images/92/9163/Fast_Fashion_Big.jpg" class="card-img-top" alt="" />
              </div>
            </div>
          </div>
        </div>
      
    </div>
      {/* <div className='adc'>
        <div className='container-fluid'>
          <div className='herosection'>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--4">
                <div class="cardone">
                  <div class="card-body">
                    <h5 class="card-title">Men's<br/>Outwear</h5>
                    <div className='lines'>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--8">
                <div class="card-img">
                  <img src="https://gumlet.assettype.com/freepressjournal/2021-03/89d260ac-1a71-4138-8d5c-872e4cde15e1/week_anchor_1_march_28.jpg?w=1200&h=900&auto=format%2Ccompress&fit=max" class="card-img-top" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className='mob herosection'>
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div class="card-img">
              <img src="https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg?w=2000" class="card-img-top" alt="" />
            </div>
          </div>

          <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div class="cardone">
              <div class="card-body">
                <h3 class="card-title">Women's</h3>
                <div className='lines'>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Hero