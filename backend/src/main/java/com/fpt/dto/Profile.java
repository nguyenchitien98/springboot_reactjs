package com.fpt.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Profile {

    private int id;
    private String username;
    private String fullName;
    private String email;
    private String photo;
    private List<Integer> roles;

}
