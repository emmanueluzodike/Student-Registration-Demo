package com.manny.studentregistrationapi.repository;

import com.manny.studentregistrationapi.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<StudentEntity, Long> {

    @Query("SELECT s FROM StudentEntity s WHERE s.emailAddress = :emailAddress AND s.password = :password")
    Optional<StudentEntity> findByEmailAddressAndPassword(@Param("emailAddress") String emailAddress,
                                                          @Param("password") String password);

    StudentEntity findByEmailAddress(String emailAddress);

    boolean existsByEmailAddress(String emailAddress);
}
