import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_COLLECTIONS } from '../GraphQL/Queries';

const Collections = () => {
  const { error, loading, data } = useQuery(LOAD_COLLECTIONS);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    if (data) setCollections(data.listListings.results);
  }, [data]);

  console.log(collections);

  return (
    <div>
      {collections?.map((collection) => (
        <div className='collection__item' key={collection.rank}>
          {collection.name}
          <img
            src={collection.imageUrl}
            alt={collection.name}
            style={{ width: 200, height: 200 }}
          />
        </div>
      ))}
    </div>
  );
};

export default Collections;
