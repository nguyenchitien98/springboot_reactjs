package com.fpt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class MexxiBackendApplication implements CommandLineRunner {

	@Autowired
	BCryptPasswordEncoder be;

	public static void main(String[] args) {
		SpringApplication.run(MexxiBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println(be.encode("admin"));
	}
}
