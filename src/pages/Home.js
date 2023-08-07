import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowList from '../Components/ShowList';

const Home = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then((response) => {
                setShows(response.data.map((result) => result.show));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    
    return (
        <div>
            <ShowList shows={shows} />
        </div>
    );
};

export default Home;
