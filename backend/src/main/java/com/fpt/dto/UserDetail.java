package com.fpt.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDetail {
    private Integer id;
    private String username;
    private String password;
    private List<Integer> roles;
}
