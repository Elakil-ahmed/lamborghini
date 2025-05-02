import React, { useState } from "react";

const SearchBody = () => {
    const data = [];
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search"
            />
            <ul>
                {filteredData.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
        </div>
    );
};

export default SearchBody;





