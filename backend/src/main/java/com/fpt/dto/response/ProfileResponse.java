package com.fpt.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileResponse {
    private Integer id;
    private String username;
    private String fullName;
    private String email;
    private String photo;
    private Integer status;
}
