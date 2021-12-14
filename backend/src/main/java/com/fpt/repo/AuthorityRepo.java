package com.fpt.repo;

import com.fpt.entity.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityRepo extends JpaRepository<Authority, Integer>{
	@Query("SELECT entity FROM Authority entity WHERE account_id=:account_id and role_id=:role_id")
	public Authority isExist(@Param("account_id") Integer accountId, @Param("role_id") Integer roleId);
}
