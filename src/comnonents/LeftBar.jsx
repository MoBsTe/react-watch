import React, { useState } from 'react';
import './LeftBar.css';

const LeftBar = ({ watchCatalog }) => {
    const [value, setValue] = useState(0);


    const handleRangeChange = (event,) => {
        const newValue = parseInt(event.target.value);
        setValue(newValue);

    };



    return (

        <div>
            <div className='categories'>
                <input type="text" placeholder='Search...'/>
                <h2>Categories</h2>
                <p>All</p>
                <p>Dress</p>
                <p>Sport</p>
                <p>Luxury</p>
                <p>Casual</p>
                <h2>Maximum Price</h2>
                <input type="range" min={0} max={1000} value={value} onChange={handleRangeChange} />
                <label>{value}$</label>
            </div>
        </div>
    );
}

export default LeftBar;
