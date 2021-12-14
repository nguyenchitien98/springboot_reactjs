package com.fpt.mapper;

import com.fpt.dto.AccountDTO;
import com.fpt.entity.Account;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AccountMapper {
	
	@Autowired
	ModelMapper mapper;
	
	public Account cvToEntity(AccountDTO dto) {
		Account entity = new Account();
		mapper.map(dto, entity);
		return entity;
	}
	
	public AccountDTO cvToDTO(Account entity) {
		AccountDTO dto = new AccountDTO();
		mapper.map(entity, dto);
		return dto;
	}
	
}
