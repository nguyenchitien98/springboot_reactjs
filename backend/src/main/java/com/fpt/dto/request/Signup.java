package com.fpt.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
public class Signup {
    @NotBlank
    @Size(min = 6, max = 12,message = "ký tự quá ngắn hoặc quá dài")
    private String username;
    private String password;
    private String fullname;
    private String email;
    private String photo;
    private Integer status;
}
