import React from "react";

const WhyUs = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 my-20">
        <div className=" px-6 py-10 mx-auto">
          <h1 className="text-2xl text-center font-semibol capitalize lg:text-3xl text-gray-800 p-4 bg-blue-100 rounded-2xl">WHY CHOOSE MAJESTIC VILLAS?</h1>

          <div className=" lg:-mx-6 lg:flex lg:items-center mt-10">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl md:h-72 lg:h-96"
              src="https://i.ibb.co/6F7t5f0/image.png"
              alt=""
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
              <p className="text-sm text-blue-500 uppercase">Experience Luxury Like Never Before</p>

              <h1 className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
              At Majestic Villas, we offer an unparalleled blend of comfort, elegance, and exclusivity. Our villas are designed to provide you with a sanctuary of tranquility, away from the hustle and bustle of everyday life.
              </h1>


              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
