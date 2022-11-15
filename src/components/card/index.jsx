import React, { memo } from "react";
import './styles.css';

const Card = memo(({ item, goToDetails}) => {
    const { id, name, image, type} = item;
    
    return (
        <div onClick={() => goToDetails(item)} className="card">
            <div className="card-image-container">
                <img className="card-image" src={image} alt={item.name} />
            </div>
            <div className="card-content">
                <p className='card-name'>{name}</p>
                <p className='card-type'>{type}</p>
                <p className='card-id'>#{id}</p>
            </div>
        </div>
    )
}, (prevProps, nextProps) => {
    return prevProps.item.id === nextProps.item.id;
});

export default Card;
