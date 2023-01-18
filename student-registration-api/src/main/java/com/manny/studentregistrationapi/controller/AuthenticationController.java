package com.manny.studentregistrationapi.controller;

import com.manny.studentregistrationapi.model.AuthenticationRequest;
import com.manny.studentregistrationapi.model.Student;
import com.manny.studentregistrationapi.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/students")
public class AuthenticationController {

    @Autowired
    private final AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signin")
    public ResponseEntity<Student> authenticate(@RequestBody AuthenticationRequest authenticationRequest){
        System.out.println("Authentication Request: " + authenticationRequest);
        Student student = authenticationService.authenticate(authenticationRequest);

        if(student == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        return ResponseEntity.ok(student);
    }
}
