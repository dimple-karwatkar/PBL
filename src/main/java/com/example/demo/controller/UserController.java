package com.example.demo.controller;

import com.example.demo.model.Movie;
import com.example.demo.model.User;
import com.example.demo.service.AuthenticationService;
import com.example.demo.service.RecommendationService;
import com.example.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private RecommendationService recommendationService;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {
        String token = authenticationService.authenticate(user);
        return Map.of("token", token);
    }

    @GetMapping("/recommendations")
    public List<Movie> getRecommendations(@RequestHeader("Authorization") String token,
                                          @PathVariable Long userId) {
        // Validate the JWT token
        if (JwtUtil.isTokenExpired(token)) {
            throw new RuntimeException("Token has expired or is invalid");
        }
        // Return recommended movies
        return recommendationService.getRecommendations(userId);
    }
}
