package com.example.rakutech.services;

import com.example.rakutech.models.Role;
import com.example.rakutech.models.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User>getUsers();
}
