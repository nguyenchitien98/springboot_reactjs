package com.fpt.service;

import com.fpt.dto.AuthorityDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AuthorityService {
	
	public List<AuthorityDTO> findAll();
	
	public AuthorityDTO findById(Integer id);
	
	public AuthorityDTO create(AuthorityDTO dto);
	
	public void delete(AuthorityDTO dto);
	
	public boolean isExits(Integer accountId, Integer roleId);
}
