import React from 'react'
import "../Style/Filter.scss"
function Filter({ setCategory, selectedCategory }) {
    const categories = [


        {

            filter: "Home",
            displayName: 'Home'
        },
        {

            filter: "women's clothing",
            displayName: 'Women'
        },
        {
            filter: "men's clothing",
            displayName: 'Men'
        }, {
            filter: "jewelery",
            displayName: 'Smart Gear'
        }, {
            filter: "electronics",
            displayName: 'Accessories'
        },
    ]
    return (

        <div className='filterone'>
            <div className='filter'>
                <h6>Filters</h6>
            </div>
            <hr />
            <div className='attribute'>
                <h6>Categories</h6>
                <input type="checkbox" id="option" name="option" value="jewelery" />
                <label>Jewellery</label> <br />
                <input type="checkbox" id="option" name="option" value="electronics" />
                <label>Electronics</label> <br />
                <input type="checkbox" id="option" name="option" value="men's clothing" />
                <label>Men's Clothing</label> <br />
                <input type="checkbox" id="option" name="option" value="women's clothing" />
                <label>Women's Clothing</label> <br />
                <hr />
            </div>
        </div>

    )
}

export default Filter