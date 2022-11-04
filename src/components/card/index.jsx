import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';

const Card = ({ item}) => {
    const { id, name, image, type} = item;
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(`/pokemon/${id}`, { state: item });
    }
    return (
        <div onClick={handleDetail} className="card">
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
};

export default Card;
