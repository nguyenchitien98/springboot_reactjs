package com.fpt.security.auth2;

import com.fpt.entity.AuthProvider;
import lombok.SneakyThrows;

import javax.naming.AuthenticationException;
import java.util.Map;

public class OAuth2UserFactory {
    @SneakyThrows
    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if(registrationId.equalsIgnoreCase(AuthProvider.GOOGLE.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        }
        else {
            throw new AuthenticationException();
        }
    }
}
