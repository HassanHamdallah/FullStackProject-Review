package com.example.backend.repository;

import com.example.backend.entity.ToDoList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepository  extends JpaRepository<ToDoList, Long> {

}
