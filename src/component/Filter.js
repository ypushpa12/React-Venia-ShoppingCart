import React from 'react'
import "../Style/Filter.scss"
function Filter({ setCategory, selectedCategory }) {
    return (

        <div className='filterone'>
            <div className='filter'>
                <h6>Filters</h6>
            </div>
            <hr />
            <div className='attribute'>
                <h6>Categories</h6>
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Jewellery</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Electronics</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Men's Clothing</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Women's Clothing</label> <br />
                <hr />
            </div>
        </div>

    )
}

export default Filter