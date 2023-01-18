package com.manny.studentregistrationapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Student {

    private Long id;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String password;
    private String major;
    private int creditHours;

    private List<Course> courses;
}
