package com.harshitha.careerconnect.controller;

import com.harshitha.careerconnect.dto.LoginRequest;
import com.harshitha.careerconnect.entity.User;
import com.harshitha.careerconnect.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(
        origins = {
                "http://localhost:5173",
                "https://career-connect-frontend-black.vercel.app"
        },
        allowCredentials = "true"
)
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@Valid @RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);
    }
}