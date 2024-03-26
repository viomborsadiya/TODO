package com.example.todo.service;

import com.example.todo.entity.Item;
import com.example.todo.entity.User;
import com.example.todo.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> findAllItems()
    {
        return itemRepository.findAll();
    }

    public void addTaskToUser(String task, User user)
    {
        Item item = new Item(task,user);
        itemRepository.save(item);
    }

}
