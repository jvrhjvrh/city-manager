import axios from "axios";
import React, { useEffect, useState } from "react";

import './city.css'
import CityCard from "./CityCard";
import SearchBar from "./SearchBar";
import EditCityCard from "./EditCityCard";

const url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080'
console.log(process.env);

const City = () => {
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]);
    const [editing, setEditing] = useState({});
    const [name, setName] = useState('');

    const fetchCities = async () => {
       const request = await axios.get(`${url}/city${name ? `?name=${name}` : ''}`);
       const { response } = request.data;
       setCities(response);
    }

    useEffect(() => {
        setLoading(true);
        fetchCities()
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        setLoading(true);
        fetchCities()
            .finally(() => {
                setLoading(false);
            });
    }

    const searchName = (value) => {
        setName(value);
    }

    const edit = (id) => {
        setEditing({...cities.find(city => city.id === id)});
    }

    const updateName = (name) => {
        setEditing((e) => ({...e, name}))
    }

    const updatePhoto = (photo) => {
        setEditing((e) => ({...e, photo}))
    }

    const cancelEditing = () => {
        setEditing({})
    }

    const saveEditing = () => {
        setLoading(true);
        axios.put(`${url}/city/${editing.id}`, editing)
            .then(() => {
                const index = cities.findIndex(city => city.id === editing.id);
                setCities(cities => {
                    const newCities = JSON.parse(JSON.stringify(cities));
                    newCities[index] = editing;
                    return newCities;
                })
            })
            .finally(() => {
                setEditing({});
                setLoading(false);
            });

        console.log(editing);
    }

    if (loading) {
        return <div>loading</div>;
    }

    console.log(editing);
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>City Viewer</h1>
            <SearchBar formSubmit={submitForm} name={name} searchName={searchName} />
            {
                cities.map((city) => {
                    const { id } = city;
                    if(editing.id === id) {
                        return (
                            <EditCityCard
                                key={id}
                                city={editing}
                                updateName={updateName}
                                updatePhoto={updatePhoto}
                                cancel={cancelEditing}
                                save={saveEditing}
                            />
                        )
                    }
                    return (
                        <CityCard key={id} city={city} edit={edit}/>
                    )
                })
            }
        </div>
    )
}

export default City;