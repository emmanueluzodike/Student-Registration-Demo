package com.manny.studentregistrationapi.controller;

import com.manny.studentregistrationapi.model.Student;
import com.manny.studentregistrationapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {

    @Autowired
    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/register")
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        Student createdStudent = studentService.addStudent(student);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdStudent);
    }
}
