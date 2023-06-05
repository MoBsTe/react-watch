import React from 'react';
import './Watch.css';

const Waths = ({ watchCatalog }) => {
    return (

        <div id={watchCatalog.id} className='item'>
            <img src={watchCatalog.img} alt="" />
            <div className='wath-name'>{watchCatalog.Type}</div>
            <div className='price'>{watchCatalog.Price}$</div>
        </div>

    );
}

export default Waths;
