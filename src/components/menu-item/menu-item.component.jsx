import React from 'react';
import './menu-item.styles.scss';

const menuItemClass = size => size ? `${size} menu-item` : `menu-item`;

const MenuItem = ({title, imageUrl, size}) => (

    <div className={menuItemClass(size)}>

        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`  
        }} />

        <div className = 'content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;