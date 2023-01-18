package com.manny.studentregistrationapi.controller;

import com.manny.studentregistrationapi.entity.StudentEntity;
import com.manny.studentregistrationapi.exception.EmailAlreadyExistsExeception;
import com.manny.studentregistrationapi.model.Course;
import com.manny.studentregistrationapi.model.ErrorResponse;
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
    public ResponseEntity<Object> addStudent(@RequestBody Student student) {

      try{
          Student createdStudent = studentService.addStudent(student);
          return ResponseEntity.status(HttpStatus.CREATED).body(createdStudent);
      }catch(EmailAlreadyExistsExeception e){

          return ResponseEntity.status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getMessage()));
      }
    }



    @PostMapping("enroll/{id}/courses")
    public ResponseEntity<StudentEntity> addCourse(@PathVariable Long id,
                                                   @RequestBody Course course){

        System.out.println(course);
        StudentEntity studentEntity = studentService.addCourse(id, course);
        if(studentEntity == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        return ResponseEntity.ok(studentEntity);
    }


}
