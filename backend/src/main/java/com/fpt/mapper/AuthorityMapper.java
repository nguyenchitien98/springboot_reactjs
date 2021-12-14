package com.fpt.mapper;

import com.fpt.dto.AuthorityDTO;
import com.fpt.entity.Authority;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AuthorityMapper {

	@Autowired
	ModelMapper mapper;
	
	public Authority cvToEntity(AuthorityDTO dto) {
		Authority entity = new Authority();
		mapper.map(dto, entity);
		return entity;
	}
	
	public AuthorityDTO cvToDTO(Authority entity) {
		AuthorityDTO dto = new AuthorityDTO();
		mapper.map(entity, dto);
		return dto;
	}
	
}
