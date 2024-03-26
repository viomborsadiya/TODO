package com.example.todo.repository;


import com.example.todo.entity.Item;
import com.example.todo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {


    List<Item> findByUser(User user);

    @Modifying
    @Query("DELETE FROM Item i WHERE i.id = :taskId")
    void deleteByTaskId(@Param("taskId") Long taskId);

}


