package com.manny.studentregistrationapi.service;

import com.manny.studentregistrationapi.entity.StudentEntity;
import com.manny.studentregistrationapi.model.AuthenticationRequest;
import com.manny.studentregistrationapi.model.Student;
import com.manny.studentregistrationapi.repository.StudentRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private final StudentRepository studentRepository;

    @Autowired
    public AuthenticationServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public Student authenticate(AuthenticationRequest authenticationRequest) {
        System.out.println("Authenticatio Request 2: " + authenticationRequest);
        Optional<StudentEntity> studentEntity = studentRepository
                .findByEmailAddressAndPassword(authenticationRequest.getEmailAddress(), authenticationRequest.getPassword());

        System.out.println("studentEntity: "+ studentEntity);
        //returns student if present or else it returns null
        if(studentEntity.isPresent()){
            Student student = new Student();
            BeanUtils.copyProperties(studentEntity.get(),student);
            System.out.println("Student: " + student + " Found!");
            return student;
        }
        return null;

    }
}
