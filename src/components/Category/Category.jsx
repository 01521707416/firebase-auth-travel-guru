import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CountryCard from '../CountryCard/CountryCard';

const Category = () => {

    /* Getting 'id' as params from the loader in route */
    const { id } = useParams()

    /* Catching API data from the loader using useLoaderData hook */
    const categoryCountries = useLoaderData()

    return (
        <div className='mt-4'>
            {/* If 'id' exists, then the lenths of the API object will be shown */}

            {id && <h5 className='mb-3'>Countries in this category: {categoryCountries.length}</h5>}

            {/* Array mapping and sending data as props to CountryCard component */}
            {
                categoryCountries.map(country => <CountryCard
                    key={country._id}
                    country={country}
                ></CountryCard>)
            }
        </div>
    );
};

export default Category;