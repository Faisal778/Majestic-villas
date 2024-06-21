import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EstateDetails = () => {
    const estates = useLoaderData();
    //console.log(estate)
    const {id} = useParams()
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt)
    console.log(estate)
    return (
        <div>
            
        </div>
    );
};

export default EstateDetails;