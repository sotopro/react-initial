import React from "react";
import './styles.css'
const Card = ({ item }) => {
    const { id, name, image, type } = item;
    return (
        <div className="card">
            <div className="card-image-container">
                <img className='card-image' src={image} alt={name} />
            </div>
            <div className="card-content">
                <p className="card-name">{name}</p>
                <p className="card-type">{type}</p>
                <p className="card-id">#{id}</p>
            </div>
        </div>
    );
};

export default Card;