import React, {useState} from 'react';
import store from '../redux/store';
import { useDispatch } from 'react-redux'

import "../Style/Filter.scss";
const txtStyle={
    fontSize:"16px",
    fontFamily:'Muli',
    paddingRight:"10px",
    color:"inherit"
}
const chkboxsize ={
    width: "20px",
    height: "20px"
}
function Filter({ setCategory, selectedCategory }) {
    const [checked, setChecked] = useState([]);
    const dispatch = useDispatch();

    let arr =[];
    const handleOnChange = (e) => {
        console.log(e.target.value);
        if(e.target.checked)
            arr.push(e.target.value);
        else{
            arr.splice(checked.indexOf(e.target.value), 1)
        }
        console.log(arr);
      };
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
            filter: "jewellery",
            displayName: 'Smart Gear'
        }, {
            filter: "electronics",
            displayName: 'Accessories'
        },
    ]

    return (

        <div className='filterone'>
            <div className='filter'>
                <h6 style={txtStyle}>Filters</h6>
            </div>
            <hr />
            <div className='attribute'>
                <h6 style={txtStyle}>Categories</h6>
                <input style={chkboxsize} type="checkbox" id="option" name="option" value="jewelery" onChange={handleOnChange} />
                <label style={txtStyle}>Jewellery</label> <br />
                <input style={chkboxsize} type="checkbox" id="option" name="option" value="electronics" onChange={handleOnChange}/>
                <label style={txtStyle}>Electronics</label> <br />
                <input style={chkboxsize} type="checkbox" id="option" name="option" value="men's clothing" onChange={handleOnChange}/>
                <label style={txtStyle}>Men's Clothing</label> <br />
                <input style={chkboxsize} type="checkbox" id="option" name="option" value="women's clothing" onChange={handleOnChange}/>
                <label style={txtStyle}>Women's Clothing</label> <br />
                <hr />
            </div>
        </div>

    )
}

export default Filter