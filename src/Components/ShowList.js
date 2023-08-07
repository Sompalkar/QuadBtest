import React from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css'; 

const ShowList = ({ shows }) => {
    return (
        <div className="show-list">
            <h2>TV Shows</h2>

             

                <div className="show-cards">
                    {shows.map((show) => (





                        <div key={show.id} className="show-card">
                            <h3> Movie : {show.name}</h3>

                            <p>Language: {show.language}</p>
                            <p> Rating : {show.rating.average}</p>
                            <p>Genres: {show.genres.join(', ')}</p>
                            <button className='movie-Info' >


                                <Link to={`/show/${show.id}`}>
                                    Click For More Info
                                </Link>
                            </button>

                        </div>


                    ))}
                </div>
           
        </div>
    );
};

export default ShowList;
