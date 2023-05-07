import React from "react";

const CityCard = ({city, edit}) => (
    <div className="city-card">
        <div className="city-card-container">
            <button onClick={() => edit(city.id)}>Edit</button>
        </div>
        <div className="city-card-container">
            {city.name}
        </div>
        <div className="city-card-container">
            <img className="city-card-image" src={city.photo} alt={city.name} />
        </div>
    </div>
)

export default CityCard;