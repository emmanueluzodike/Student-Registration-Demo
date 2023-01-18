package com.manny.studentregistrationapi.service;

import com.manny.studentregistrationapi.model.AuthenticationRequest;
import com.manny.studentregistrationapi.model.Student;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

@Service
public interface AuthenticationService {
    Student authenticate(AuthenticationRequest authenticationRequest);
}
