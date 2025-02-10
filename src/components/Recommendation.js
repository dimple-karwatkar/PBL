import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendation = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/recommendations', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setRecommendations(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch recommendations');
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="recommendations-container">
            <h2>Movie Recommendations</h2>
            <div className="recommendations">
                {recommendations.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img src={movie.posterUrl} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendation;
