package com.manny.studentregistrationapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Course {

    private Long id;
    private String name;
    private int creditHours;

    private List<Student> students;
}
