package com.manny.studentregistrationapi.service;

import com.manny.studentregistrationapi.entity.CourseEntity;
import com.manny.studentregistrationapi.entity.StudentEntity;
import com.manny.studentregistrationapi.exception.EmailAlreadyExistsExeception;
import com.manny.studentregistrationapi.model.Course;
import com.manny.studentregistrationapi.model.Student;
import com.manny.studentregistrationapi.repository.CourseRepository;
import com.manny.studentregistrationapi.repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {
    @Autowired
    private final StudentRepository studentRepository;
    private final CourseRepository courseRepository;

    public StudentServiceImpl(StudentRepository studentRepository, CourseRepository courseRepository) {
        this.studentRepository = studentRepository;
        this.courseRepository = courseRepository;
    }

    @Override
    public Student addStudent(Student student) {


        if(studentRepository.existsByEmailAddress(student.getEmailAddress())){
            throw new EmailAlreadyExistsExeception("Email Already Exists");
        }


        StudentEntity studentEntity = new StudentEntity();
        BeanUtils.copyProperties(student, studentEntity);
        studentRepository.save(studentEntity);
        studentEntity = studentRepository.findByEmailAddress(student.getEmailAddress());
        student.setId(studentEntity.getId());
        return student;
    }

    @Override
    public StudentEntity addCourse(Long studentId, Course course) {
        System.out.println("course n: " + course.getName());
        Optional<StudentEntity> student = studentRepository.findById(studentId);
        if(!student.isPresent()){
            return null;
        }

//        StudentEntity studentEntity = student.get();
//        System.out.println("Course name: " + course.getName());
//        CourseEntity courseEntity = new CourseEntity();
//        BeanUtils.copyProperties(course, courseEntity);
//        courseRepository.save(courseEntity);

        StudentEntity studentEntity = student.get();
        Optional<CourseEntity> tmp_course = courseRepository.findByName(course.getName());
        if(tmp_course.isPresent()) {
            if(student.get().getCourses().contains(tmp_course.get())){
                return null;
            }
            studentEntity.getCourses().add(tmp_course.get());
            studentEntity.setCreditHours(studentEntity.getCreditHours() + tmp_course.get().getCreditHours());
        }else{
            CourseEntity newCourse = CourseEntity.builder()
                    .name(course.getName())
                    .creditHours(course.getCreditHours())
                    .build();
            studentEntity.getCourses().add(newCourse);
            courseRepository.save(newCourse);
            studentEntity.setCreditHours(studentEntity.getCreditHours() + newCourse.getCreditHours());
        }
        studentRepository.save(studentEntity);
        return studentEntity;
    }

    @Override
    public List<Course> getAllCoursesOfStudent(Long id) {
        StudentEntity studentEntity = studentRepository.findById(id).get();
        System.out.println("StudentEntity: " + studentEntity);
        List<CourseEntity> courseEntities = studentEntity.getCourses();
        System.out.println("CourseEntities: " + courseEntities);
        List<Course> courses = courseEntities
                .stream()
                .map(cors -> new Course(
                        cors.getId(),
                        cors.getName(),
                        cors.getCreditHours()))
                .collect(Collectors.toList());
        System.out.println("Courses: " + courses);
        return courses;
    }

    @Override
    public boolean deleteCourse(Long id, Course course) {
        StudentEntity studentEntity = studentRepository.findById(id).get();
        Optional<CourseEntity> courseEntity = courseRepository.findById(course.getId());
        if(courseEntity.isPresent()){
            studentEntity.getCourses().remove(courseEntity.get());
            studentEntity.setCreditHours(studentEntity.getCreditHours() - courseEntity.get().getCreditHours());
            studentRepository.save(studentEntity);
            return true;
        }
        return false;
    }

    @Override
    public boolean emailExists(String emailAddress) {
        return studentRepository.existsByEmailAddress(emailAddress);
    }


}
