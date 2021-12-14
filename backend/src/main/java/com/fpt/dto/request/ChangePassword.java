package com.fpt.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Setter
@Getter
@NoArgsConstructor
public class ChangePassword {
    @NotBlank
    String currentPassword;
    @NotBlank(message = "Not blank")
    @Size(min = 6,max = 12,message = "length Invalid")
    String newPassword;
}
