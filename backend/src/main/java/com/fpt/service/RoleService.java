package com.fpt.service;

import com.fpt.dto.RoleDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RoleService {
	
	public List<RoleDTO> findAll();
	
}
