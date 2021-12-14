package com.fpt.mapper;

import com.fpt.dto.RoleDTO;
import com.fpt.entity.Role;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoleMapper {
	
	@Autowired
	ModelMapper mapper;
	
	public Role cvToEntity(RoleDTO dto) {
		Role entity = new Role();
		mapper.map(dto, entity);
		return entity;
	}
	
	public RoleDTO cvToDTO(Role entity) {
		RoleDTO dto = new RoleDTO();
		mapper.map(entity, dto);
		return dto;
	}
	
}
