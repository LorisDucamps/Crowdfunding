import React from 'react';
import collections from '../datas/collections.json'

const Collections = () => {


    return (
        <div>
            {collections.map((collection) => {
                return (
                    <div key={collection.id}>
                        <h1>{collection.title}</h1>
                        <p>{collection.description}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Collections;