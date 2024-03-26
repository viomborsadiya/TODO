package com.example.todo.service;

import com.example.todo.entity.FileEntity;
import com.example.todo.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;

    public void saveFile(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        byte[] fileContent = file.getBytes();

        FileEntity fileEntity = new FileEntity();
        fileEntity.setFileName(fileName);
        fileRepository.save(fileEntity);
    }
}