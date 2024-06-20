import React from 'react';
import Estates from './Estates';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner className = "rounded-lg"></Banner>
        <Estates></Estates>
        </div>
    );
};

export default Home;