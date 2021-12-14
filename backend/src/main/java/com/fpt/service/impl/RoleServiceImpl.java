package com.fpt.service.impl;

import com.fpt.dto.RoleDTO;
import com.fpt.mapper.RoleMapper;
import com.fpt.repo.RoleRepo;
import com.fpt.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RoleServiceImpl implements RoleService{

	@Autowired
	RoleRepo roleRepo;
	
	@Autowired
	RoleMapper roleMapper;
	
	@Override
	public List<RoleDTO> findAll() {
		return this.roleRepo.findAll().stream()
				.map(entity -> roleMapper.cvToDTO(entity))
				.collect(Collectors.toList());
	}
	
}
