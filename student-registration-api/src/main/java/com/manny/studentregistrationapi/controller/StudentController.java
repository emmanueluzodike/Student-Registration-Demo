package com.manny.studentregistrationapi.controller;

import com.manny.studentregistrationapi.entity.StudentEntity;
import com.manny.studentregistrationapi.model.Course;
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

    @PostMapping("enroll/{id}/courses")
    public ResponseEntity<StudentEntity> addCourse(@PathVariable Long id,
                                                   @RequestBody Course course){

        StudentEntity studentEntity = studentService.addCourse(id, course);
        if(studentEntity == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(studentEntity, HttpStatus.OK);
    }


}
