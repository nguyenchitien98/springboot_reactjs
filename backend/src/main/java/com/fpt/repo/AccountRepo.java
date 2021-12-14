package com.fpt.repo;

import com.fpt.entity.Account;
import com.fpt.entity.AuthProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepo extends JpaRepository<Account, Integer>{

	Account findByUsername(String username);
	
	@Query("SELECT entity FROM Account entity WHERE entity.username=:username and entity.status=1")
	Account findActiveByUsername(@Param("username") String username);
	
	
	@Query("SELECT entity FROM  Account entity WHERE entity.username=:username and entity.password=:password and entity.status=1")
	Account findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

	boolean existsByEmail(String email);

	boolean existsByUsername(String username);

	Account findByEmail(String email);

	Account findByEmailAndProvider(String email, AuthProvider provider);
}
