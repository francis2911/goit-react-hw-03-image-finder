import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Searchbarr, SearchFormButton, SearchForm, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

function Searchbar({ onSubmit }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchTerm);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Searchbarr className="searchbar">
            <SearchForm className="form" onSubmit={handleSubmit}>
                <SearchFormButton type="submit" className="button">
                    <FontAwesomeIcon icon={faSearch} />
                    <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
                </SearchFormButton>
                <SearchFormInput
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </SearchForm>
        </Searchbarr>
    );
}

export default Searchbar;

