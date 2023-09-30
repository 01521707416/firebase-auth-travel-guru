import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CountryCard from '../CountryCard/CountryCard';

const Category = () => {

    const { id } = useParams()
    const categoryCountries = useLoaderData()

    return (
        <div className='mt-4'>
            {id && <h5 className='mb-3'>Countries in this category: {categoryCountries.length}</h5>}
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