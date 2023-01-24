package com.manny.studentregistrationapi.service;

import com.manny.studentregistrationapi.entity.StudentEntity;
import com.manny.studentregistrationapi.model.Course;
import com.manny.studentregistrationapi.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {
    Student addStudent(Student student);

    StudentEntity addCourse(Long id, Course course);


    List<Course> getAllCoursesOfStudent(Long id);

    boolean deleteCourse(Long id, Course course);

    boolean emailExists(String emailAddress);
}
