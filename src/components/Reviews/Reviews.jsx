import React from "react";

const Reviews = () => {
  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  What Our Clients Say <br /> About <span className="text-blue-500">Us</span>
                </h1>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Our clients rave about the luxurious comfort and exceptional service at Majestic Villas. Discover why our guests return year after
                  year to experience the best in villa accommodations.
                </p>
                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  READ TESTIMONIALS
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue" />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Majestic Villa"
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-blue-500 ">“</p>

              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                Experience Unparalleled Luxury with Majestic Villas!
              </h1>

              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                “Majestic Villas provided an unforgettable experience! The service was impeccable, and the villa was beyond our expectations. Highly
                recommend!”
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-300">Satisfied Guest</p>

              <div className="flex items-center justify-between mt-12 lg:justify-start"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Hear From Our Happy Guests</h1>

              <div className="flex mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>

            <div className="flex justify-between mt-8 md:mt-0">
             
            

            </div>
          </div>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Majestic Villas provided an unforgettable experience! The service was impeccable, and the villa was beyond our expectations. Highly
                recommend!”
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="John Doe"
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">John Doe</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Satisfied Guest</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
              <p className="leading-loose text-white">
                “Our stay at Majestic Villas was simply perfect. The amenities were top-notch, and the view was breathtaking. We will definitely be
                coming back!”
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt="Jeny Doe"
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-white">Jeny Doe</h1>
                  <span className="text-sm text-blue-200">CEO, Doe Enterprises</span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “We had an amazing time at Majestic Villas. The hospitality was exceptional, and the villa itself was stunning. Truly a five-star
                experience!”
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Ema Watson"
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
