package com.fpt.security.auth2;

import com.fpt.entity.Account;
import com.fpt.entity.AuthProvider;
import com.fpt.repo.AccountRepo;
import com.fpt.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final AccountRepo accountRepo;
    private final AccountService accountService;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        String provider = userRequest.getClientRegistration().getRegistrationId();
        OAuth2User oAuth2User = super.loadUser(userRequest);
        OAuth2UserInfo oAuth2UserInfo = OAuth2UserFactory.getOAuth2UserInfo(provider, oAuth2User.getAttributes());
//        Account account = accountRepo.findByEmail(oAuth2UserInfo.getEmail());
        Account account = accountRepo.findByEmailAndProvider(oAuth2UserInfo.getEmail(),AuthProvider.GOOGLE);

        if (account == null) {
            account = accountService.registerOauth2User(provider, oAuth2UserInfo);
        } else {
            account = accountService.updateOauth2User(account, provider, oAuth2UserInfo);
        }
        return UserPrincipal.create(account, oAuth2User.getAttributes());
    }
}
