import React, { useState, useEffect } from 'react';
import { fetchRecommendations } from './services/api';
import MovieCard from './components/MovieCard';

const App = () => {
    const [userId, setUserId] = useState(1); // Assume a logged-in user with ID 1
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState(null); // New state for error handling

    useEffect(() => {
        fetchRecommendations(userId)
            .then((data) => {
                setRecommendations(data);
            })
            .catch((err) => {
                setError('Failed to load recommendations. Please try again later.');
            });
    }, [userId]);

    return (
        <div className="App">
            <h1>Movie Recommendations</h1>
            {error && <p>{error}</p>} {/* Display error if it occurs */}
            <div className="movies-list">
                {recommendations.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './Login';
// import Recommendation from './Recommendation';

// function App() {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/login" component={Login} />
//                 <Route path="/recommendations" component={Recommendation} />
//                 {/* This is the default route */}
//                 <Route path="/" exact>
//                     <div>Welcome! Please log in.</div>
//                 </Route>
//             </Switch>
//         </Router>
//     );
// }

// export default App;
