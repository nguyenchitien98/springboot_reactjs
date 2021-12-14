package com.fpt.controller.tool;

import com.fpt.service.FileManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FileManagerController {

		@Autowired
		FileManagerService fileService;
		
		@GetMapping("/file/read/{name}")
		public byte[] read(@PathVariable("name") String name) {
			return this.fileService.read(name);
		}
		
		@PostMapping("/file/save")
		public File save(@RequestPart("files") MultipartFile file) {
			return this.fileService.save(file);
		}
		
		@PostMapping("/file/save/multiple")
		public void saveMultiple(@RequestPart("files") MultipartFile[] files) {
			this.fileService.saveMultiple(files);
		}
}
