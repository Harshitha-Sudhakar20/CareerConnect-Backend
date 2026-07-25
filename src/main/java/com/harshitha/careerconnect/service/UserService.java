package com.harshitha.careerconnect.service;

import com.harshitha.careerconnect.dto.LoginRequest;
import com.harshitha.careerconnect.entity.User;
import com.harshitha.careerconnect.repository.UserRepository;
import com.harshitha.careerconnect.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public User registerUser(User user) {

        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public String loginUser(LoginRequest loginRequest) {

        Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());

        if (user.isPresent()) {

            if (passwordEncoder.matches(loginRequest.getPassword(), user.get().getPassword())) {
                return jwtService.generateToken(user.get().getEmail());
            } else {
                return "Invalid Password";
            }
        }

        return "User Not Found";
    }
}