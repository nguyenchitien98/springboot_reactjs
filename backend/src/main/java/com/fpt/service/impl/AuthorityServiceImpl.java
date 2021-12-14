package com.fpt.service.impl;

import com.fpt.dto.AuthorityDTO;
import com.fpt.entity.Authority;
import com.fpt.mapper.AuthorityMapper;
import com.fpt.repo.AuthorityRepo;
import com.fpt.service.AuthorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthorityServiceImpl implements AuthorityService{

	@Autowired
	AuthorityRepo authorityRepo;
	
	@Autowired
	AuthorityMapper authorityMapper;
	
	@Override
	public List<AuthorityDTO> findAll() {
		return this.authorityRepo.findAll().stream()
				.map(entity -> authorityMapper.cvToDTO(entity))
				.collect(Collectors.toList());
	}

	@Override
	public AuthorityDTO create(AuthorityDTO dto) {
		return this.authorityMapper.cvToDTO(this.authorityRepo.save(this.authorityMapper.cvToEntity(dto)));
	}

	@Override
	public void delete(AuthorityDTO dto) {
		this.authorityRepo.delete(this.authorityMapper.cvToEntity(dto));
	}

	@Override
	public boolean isExits(Integer accountId, Integer roleId) {
		Authority entity = this.authorityRepo.isExist(accountId, roleId);
		if(entity == null) {
			return false;
		}
		return true;
	}

	@Override
	public AuthorityDTO findById(Integer id) {
		return this.authorityMapper.cvToDTO(this.authorityRepo.findById(id).get());
	}

}
