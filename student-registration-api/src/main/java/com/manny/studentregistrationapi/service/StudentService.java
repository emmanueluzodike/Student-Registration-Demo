package com.manny.studentregistrationapi.service;

import com.manny.studentregistrationapi.model.Student;
import org.springframework.stereotype.Service;

@Service
public interface StudentService {
    Student addStudent(Student student);
}
