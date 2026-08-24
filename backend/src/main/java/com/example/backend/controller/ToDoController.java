package com.example.backend.controller;

import com.example.backend.entity.ToDoList;
import com.example.backend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class ToDoController {

    @Autowired
    TodoService todoService;

    @GetMapping
    public List<ToDoList> getAllTasks() {
        return todoService.getAllTasks();
    }

    @PostMapping
    public ToDoList addTask(
            @RequestParam String title,
            @RequestParam boolean status
    ) {
        return todoService.addTask(title, status);
    }

    @PutMapping("/{id}")
    public ToDoList updateTask(
            @PathVariable Long id,
            @RequestParam String title,
            @RequestParam boolean status
    ) {
        return todoService.updateTask(id, title, status);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        todoService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }
}