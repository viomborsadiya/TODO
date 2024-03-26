package com.example.todo.repository;

import com.example.todo.entity.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FileRepository extends JpaRepository<FileEntity, Long> {
    FileEntity findByFileName(String fileName);

    //List<FileEntity> findByFileSizeGreaterThan(long fileSize);
}

