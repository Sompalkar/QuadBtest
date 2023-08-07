import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './ShowDetails.css'; 

const ShowDetails = () => {

    const [showDetails, setShowDetails] = useState();
    const { id } = useParams();

    useEffect(() => {

        // Fetch show details using API call
        axios
            .get(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => {
                setShowDetails(response.data);
            })
            .catch((error) => {
                console.error('Error fetching show details:', error);
            });
    }, [id]);

    if (!showDetails) {
        return <div>Loading...</div>;
    } 

    return (
        <div className='summaryPage'>
            <h1 style={{ marginLeft: '30px', fontSize: '45px' }}>Summary</h1>

            <h1 className='movie-name'>{showDetails.name}</h1>
            <div className="show-details"> 
              
                <div>
                    <img
                        src={showDetails.image.original}
                        alt={showDetails.name}
                        className="show-image"
                    />
                </div>
                 
                
              

               
                <div className='right'>
                    <p> Movie Name: {showDetails.name}</p>

                    <p>Language: {showDetails.language}</p>
                    <p>premiered: {showDetails.premiered}</p>
                    <p> Network: {showDetails.network.country.name}</p>
                    <p>Genres: {showDetails.genres.join(', ')}</p>

                    <p> schedule: {showDetails.schedule.days}</p>
                    <p>Status: {showDetails.status}</p>
                    <p className='movie-summary'>Summary: {showDetails.summary}</p>
                </div>
                
            </div>

        </div>
    );
};

export default ShowDetails;
