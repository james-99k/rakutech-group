package com.example.rakutech.repositories;

import com.example.rakutech.models.ERole;
import com.example.rakutech.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
