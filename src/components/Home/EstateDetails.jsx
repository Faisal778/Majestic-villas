import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estates = useLoaderData();
  //console.log(estate)
  const { id } = useParams();
  const idInt = parseInt(id);
  const estate = estates.find((estate) => estate.id === idInt);
  console.log(estate);
  return (
    <div className="flex mt-10 justify-center">
      <Helmet>
        <title>Majestic Villas | Details</title>
      </Helmet>
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-64" src={estate.image_url} alt="Article" />

        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-800 dark:text-gray-400">{estate.segment_name}</span>
            <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
              {estate.price}
            </span>
          </div>
          <div>
            <div className="flex justify-between my-2">
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{estate.location}</span>
              <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                {estate.area}
              </span>
            </div>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex={0}
              role="link">
              {estate.estate_title}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{estate.description}</p>
          </div>

          <div className="mt-4">
            <div className="flex ">
              <div className="flex">
                <a href="#" className=" flex flex-row gap-4 mx-2 font-semibold text-gray-700 dark:text-gray-200">
                  {estate.facilities.map((facility, index) => (
                    <div className="flex flex-row" key={index}>
                      <div>#</div>
                      <div>{facility}</div>
                    </div>
                  ))}
                </a>
              </div>
              <span className="mx-1 text-xs font-semibold text-blue-600 dark:text-gray-300 ">For {estate.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
