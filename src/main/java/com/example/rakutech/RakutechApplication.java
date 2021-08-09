package com.example.rakutech;

import com.example.rakutech.models.Role;
import com.example.rakutech.models.User;
import com.example.rakutech.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class RakutechApplication {

	public static void main(String[] args) {
		SpringApplication.run(RakutechApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner runner(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER"));
			userService.saveRole(new Role(null, "ROLE_MANAGER"));
			userService.saveRole(new Role(null, "ROLE_ADMIN"));
			userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));

			userService.saveUser(new User(null, "Test Acc", "test", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "James Gastador", "manager", "james", new ArrayList<>()));
			userService.saveUser(new User(null, "James Gastador", "admin", "james", new ArrayList<>()));
			userService.saveUser(new User(null, "James Gastador", "superadmin", "james", new ArrayList<>()));

			userService.addRoleToUser("test", "ROLE_USER");
			userService.addRoleToUser("manager", "ROLE_MANAGER");
			userService.addRoleToUser("admin", "ROLE_ADMIN");
			userService.addRoleToUser("superadmin", "ROLE_MANAGER");
			userService.addRoleToUser("superadmin", "ROLE_ADMIN");
			userService.addRoleToUser("superadmin", "ROLE_SUPER_ADMIN");

		};
	}

}
