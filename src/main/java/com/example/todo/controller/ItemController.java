package com.example.todo.controller;

import com.example.todo.entity.Item;
import com.example.todo.entity.User;
import com.example.todo.repository.ItemRepository;
import com.example.todo.repository.UserRepository;
import com.example.todo.service.ItemService;
import com.example.todo.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ItemController {

    @Autowired
    private UserService userService;

    @Autowired
    private ItemService itemService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ItemRepository itemRepository;

    @PostMapping("/addTodo/{userId}")
    public ResponseEntity<?> addTask(@RequestBody String task, @PathVariable Long userId){
        User user = userRepository.getUserByUserId(userId);

        itemService.addTaskToUser(task,user);

        return ResponseEntity.ok("Sucesss");
    }

    @GetMapping("/getTask/{userId}")
    public ResponseEntity<List<Item>> getTask(@PathVariable Long userId)
    {
        User user = userRepository.getUserByUserId(userId);
        List<Item> items = itemRepository.findByUser(user);
        return ResponseEntity.ok(items);
    }

    @Transactional
    @PostMapping("deleteTask/{taskId}")
    public ResponseEntity<?> deleteTask(@PathVariable Long taskId)
    {
        itemRepository.deleteByTaskId(taskId);
        return ResponseEntity.ok("Sucesss");
    }

}
