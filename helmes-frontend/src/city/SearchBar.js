import React from "react";

const SearchBar = ({formSubmit, name, searchName}) => {
    return (
    <form onSubmit={formSubmit}>
        <div>
            <input name="name" value={name} placeholder="Search by name" onChange={(e) => searchName(e.target.value)}/>
            <button type="reset" onClick={() => searchName('')}>X</button>
            <button type="submit">Search</button>
        </div>
    </form>)
}

export default SearchBar;