import React from "react";

const EditCityCard = ({save, cancel, city, updateName, updatePhoto}) => {

    return (
        <div className="city-card">
            <div className="city-card-container">
                <button onClick={() => save()}>Save</button>
                <button onClick={() => cancel()}>Cancel</button>
            </div>
            <div className="city-card-container">
                <input value={city.name} onChange={(e) => updateName(e.target.value)} placeholder="City name"/>
            </div>
            <div className="city-card-container">
                <input value={city.photo} onChange={(e) => updatePhoto(e.target.value)} placeholder="City photo"/>
            </div>
        </div>
    )
}

export default EditCityCard;