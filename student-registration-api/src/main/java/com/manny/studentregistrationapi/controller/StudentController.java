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

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

        // check if email already exists
        if (studentService.emailExists(student.getEmailAddress())) {
            return new ResponseEntity<>(new ErrorResponse("Email already exists"), HttpStatus.BAD_REQUEST);
        }
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


    @GetMapping("/{id}/course")
    public List<Course> getAllCoursesOfStudent(@PathVariable Long id){
        return studentService.getAllCoursesOfStudent(id);
    }

    @DeleteMapping("/{id}/course/delete")
    public ResponseEntity<Map<String, Boolean>> deleteCourse(@PathVariable Long id , @RequestBody Course course){
        boolean deleted = false;
        deleted = studentService.deleteCourse(id, course);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }


}
