package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.util.JwtUtil;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private static final String SECRET_KEY = "secret_key";

    public String authenticate(User user) {
        // Hardcoded for simplicity, replace with DB validation in a real app
        if ("admin".equals(user.getUsername()) && "password".equals(user.getPassword())) {
            return JwtUtil.generateToken(user);
        }
        throw new RuntimeException("Invalid credentials");
    }
}
