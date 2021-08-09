package com.example.rakutech.repositories;

import com.example.rakutech.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long>  {
    Role findByName(String name);
}
