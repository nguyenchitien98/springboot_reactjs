package com.fpt.service.impl;

import com.fpt.service.FileManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.File;
import java.nio.file.Files;

@Service
public class FileManagerServiceImpl implements FileManagerService{
	@Autowired
	private ServletContext app;

	public File save(MultipartFile file) {
		File dir = new File(app.getRealPath("/files/"));
		if(!dir.exists()) dir.mkdirs();
		try {
			File saveFile = new File(dir, file.getOriginalFilename());
			file.transferTo(saveFile);
			return saveFile;
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}
	
	public byte[] read (String name) {
		try {
			File file = new File(app.getRealPath("/files/" + name));
			return Files.readAllBytes(file.toPath());
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public void saveMultiple(MultipartFile[] files) {
		for(MultipartFile file : files) {
			this.save(file);
		}
	}
}
