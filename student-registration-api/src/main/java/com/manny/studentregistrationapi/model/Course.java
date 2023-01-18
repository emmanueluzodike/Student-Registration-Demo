package com.manny.studentregistrationapi.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Course {

    private Long id;
    private String name;
    private int creditHours;

    private List<Student> students;


    public Course(Long id, String name, int creditHours) {
        this.id = id;
        this.name = name;
        this.creditHours = creditHours;
    }
}
