import React, { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {
  const [estates, setEstates] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("villas.json")
      .then((res) => res.json())
      .then((data) => {
        setEstates(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto animate-pulse">
            <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

            <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div>
          <h1 className="m-10 mt-20 text-center font-semibold text-3xl text-yellow-400 ">--Check Out Our Estates--</h1>
          <div className="grid grid-cols-3 gap-4">
            {estates.map((estate) => (
              <Estate key={estate.id} estate={estate}></Estate>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Estates;
