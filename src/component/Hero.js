import React from 'react'
import "../Style/Hero.scss"

import hero from "../Images/mobile-hero-image1.jpeg"
import women from '../Images/hero_image_1.jpg';
let heroimgs = [
  { category: "Mens", imgurl: "../Images/mobile-hero-image1.jpeg" },
  { category: "Womens", imgurl: "../Images/hero_image_1.jpg" }
]
function Hero({ category }) {
  category = category.replace('clothing', 'Outerwear');
  const heading = category.split(" ");
  for (var i = 0; i < heading.length; i++) {
    heading[i] = heading[i].charAt(0).toUpperCase() + heading[i].slice(1);
  }
  const result = heroimgs.filter(item => item.category == 'Mens');
const finalimgurl = result[0].imgurl;
  console.log(finalimgurl, "result", heading[0])
 
  return (
    <div className='main'>

      <div className='hero-sec'>
        <div class="aem-Grid aem-Grid--12 mob-reverse">
          <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 mob_1">
            <div class="card_1">
              <div class="card_1-body">
                <h5 class="card_1_title">{heading[0]}<br />{heading[1]}</h5>
                <div className='l'>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
            <div class="pic1">
              <img src={hero} class="pic" alt="" />
              {/* <img src={women} class="pic" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero