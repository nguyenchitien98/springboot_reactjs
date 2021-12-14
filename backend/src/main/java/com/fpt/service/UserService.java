package com.fpt.service;

import com.fpt.dto.CustomUserDetail;
import com.fpt.entity.Account;
import com.fpt.repo.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService{

	@Autowired
	AccountRepo accountRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account account = this.accountRepo.findByUsername(username);
		if(account == null) {
			throw  new UsernameNotFoundException(username);
		}
		return new CustomUserDetail(account);
	}
}