package com.harshitha.careerconnect.controller;

import com.harshitha.careerconnect.dto.LoginRequest;
import com.harshitha.careerconnect.entity.User;
import com.harshitha.careerconnect.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@Valid @RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody LoginRequest loginRequest) {

        System.out.println("===== LOGIN ENDPOINT REACHED =====");

        return userService.loginUser(loginRequest);
    }
}