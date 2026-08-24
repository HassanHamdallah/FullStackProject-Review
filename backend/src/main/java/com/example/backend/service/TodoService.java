package com.example.backend.service;

import com.example.backend.entity.ToDoList;
import com.example.backend.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    ToDoRepository toDoRepository;

    public List<ToDoList> getAllTasks() {
        return toDoRepository.findAll();
    }

    public ToDoList addTask(String title, boolean status) {
        ToDoList item = new ToDoList(title, status);
        return toDoRepository.save(item);
    }

    public void deleteTask(Long id) {
        toDoRepository.deleteById(id);
    }

    public ToDoList updateTask(Long id, String title, boolean status) {
        ToDoList item = toDoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        item.setTitle(title);
        item.setStatus(status);

        return toDoRepository.save(item);
    }
}