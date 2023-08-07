import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ShowDetails.css';

const ShowDetails = () => {
    const [showDetails, setShowDetails] = useState();
    const [isFormVisible, setIsFormVisible] = useState(false);
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

    const handleBookingClick = () => {
        setIsFormVisible(true);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const bookingData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            // You can add more fields here as needed
        };

        // Store bookingData in local storage
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
        setIsFormVisible(false);
    };





 





    if (!showDetails) {
        return <div>Loading...</div>;
    }

    const storedBookingData = JSON.parse(localStorage.getItem('bookingData'));

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
                    <p>Network: {showDetails.network.country.name}</p>
                    <p>Genres: {showDetails.genres.join(', ')}</p>
                    <p>schedule: {showDetails.schedule.days}</p>
                    <p>Status: {showDetails.status}</p>
                    <p className='movie-summary'>Summary: {showDetails.summary}</p>
                    <button className="booking-button" onClick={handleBookingClick}>
                        Book Movie Ticket
                    </button>
                    <div className={`booking-form ${isFormVisible ? 'active' : ''}`}>
                        <h2>Book Movie Ticket</h2>
                        <div>
                            <p>MovieName: {showDetails.name}</p>
                            <p>Rating: {showDetails.rating.average}</p>
                            <p>Country: {showDetails.network.country.name}</p>
                            <p>Language: {showDetails.language}</p>
                            <p>premiered: {showDetails.premiered}</p>
                        </div>
                        <form onSubmit={handleFormSubmit}>
                            <label>Name:</label>
                            <input type="text" name="name" required />
                            <label>Email:</label>
                            <input type="email" name="email" required />
                            <label>Password:</label>
                            <input type="text" name="password" required />
                            
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;
