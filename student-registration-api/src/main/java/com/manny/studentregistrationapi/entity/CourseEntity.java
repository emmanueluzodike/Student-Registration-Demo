package com.manny.studentregistrationapi.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "courses")
public class CourseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int creditHours;

//    @JsonIgnore
//    @ManyToMany(mappedBy = "courses")
//    @JoinTable(
//            name = "student_course_map",
//            joinColumns = @JoinColumn(
//                    name = "course_id",
//                    referencedColumnName = "id"
//            ),
//            inverseJoinColumns = @JoinColumn(
//                    name = "student_id",
//                    referencedColumnName = "id"
//            )
//    )
//    private List<StudentEntity> students;
//
//    public void addStudents(StudentEntity student){
//        if(students == null) students = new ArrayList<>();
//        students.add(student);
//    }
}
