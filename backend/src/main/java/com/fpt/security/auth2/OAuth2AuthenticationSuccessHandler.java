package com.fpt.security.auth2;

import com.fpt.entity.Account;
import com.fpt.entity.AuthProvider;
import com.fpt.jwt.JwtHelper;
import com.fpt.repo.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Autowired
    JwtHelper jwtHelper;

    @Autowired
    AccountRepo accountRepo;

//    @Value("${hostname}")
//    private String hostname;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
//        String email = (String) oAuth2User.getAttributes().get("email");
//        String token = jwtHelper.createToken(email, "USER");
        Account account = accountRepo.findByEmailAndProvider((String) oAuth2User.getAttributes().get("email"), AuthProvider.GOOGLE);
        String token = jwtHelper.createToken(account.getUsername(),"USER");
        String uri = UriComponentsBuilder.fromUriString("http://localhost:3000/oauth2/redirect")
                .queryParam("token", token)
                .build().toUriString();
        System.out.println(token);
        getRedirectStrategy().sendRedirect(request, response, uri);
    }
}

