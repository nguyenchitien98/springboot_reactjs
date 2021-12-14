package com.fpt.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;


public interface FileManagerService {
	
	public File save(MultipartFile file);
	
	public byte[] read (String name);
	
	public void saveMultiple(MultipartFile[] files);
}
