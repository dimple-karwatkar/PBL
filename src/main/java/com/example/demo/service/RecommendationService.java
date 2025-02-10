package com.example.demo.service;

import com.example.demo.model.Movie;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendationService {

//    public List<Movie> getRecommendations() {
//        // Here, you could connect to an AI/ML service or a database for dynamic recommendations
//        return List.of(
//                new Movie("Movie 1", "A thrilling action movie", "/poster1.jpg"),
//                new Movie("Movie 2", "A heartwarming drama", "/poster2.jpg")
//        );
//    }
    public List<Movie> getRecommendations(Long userId) {
        // Here you can call the AI service via HTTP request
        // Assume we have an endpoint at http://localhost:5000/recommendations
        // You can use RestTemplate or WebClient to make the request to Python AI model

        String url = "http://localhost:5000/recommendations?userId=" + userId;
        // Call Python AI service and return the list of movie recommendations
        return List.of(
                new Movie("Movie 1", "A thrilling action movie", "/poster1.jpg"),
                new Movie("Movie 2", "A heartwarming drama", "/poster2.jpg")
        );
//        return url;
    }
}
