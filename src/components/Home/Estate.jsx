import React from 'react';
import { Link } from 'react-router-dom';

const Estate = ({estate}) => {
    console.log(estate)
    return (
        <div data-aos="animation_name" className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
                <img  className = "rounded-md py-4 " src={estate.image_url} alt= {`image of ${estate.estate_title}`} />
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-800 dark:text-gray-400">{estate.segment_name}</span>
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
        {estate.price}</span>
      </div>
  
      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{estate.estate_title}</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{estate.description}</p>
      </div>

      <div className='text-center p-4'>
      <Link to = {`estate/${estate.id}`}> <button className="btn btn-sm lg:btn-wide btn-primary text-white">View Property</button></Link>

       
      </div>
    </div>
    );
};

export default Estate;