import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_COLLECTIONS } from '../GraphQL/Queries';
import CollectionItem from './CollectionItem';

import './collection.css';

const Collections = () => {
  const { error, loading, data } = useQuery(LOAD_COLLECTIONS);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    if (data) {
      let nullRankCollections = [];
      let sortedCollections = [...data.listListings.results]
        .sort((a, b) => {
          if (a.rank === null) {
            nullRankCollections.push(a);
            return;
          }
          return a.rank - b.rank;
        })
        .filter((collection) => collection.rank !== null);
      setCollections(sortedCollections);
      console.log(sortedCollections);
    }
  }, [data]);

  return (
    <div className='collection__container'>
      {collections?.map((collection) => (
        <a
          key={collection.rank}
          href={`https://deadrare.io/collection/${collection.collectionTicker}`}
          className='collection__link--deadrare'
          target='_blank'
        >
          <CollectionItem collection={collection} />
        </a>
      ))}
    </div>
  );
};

export default Collections;
