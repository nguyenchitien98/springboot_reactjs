package com.fpt.security;

import com.fpt.jwt.JwtConfigurer;
import com.fpt.jwt.JwtTokenFilter;
import com.fpt.security.auth2.CustomOAuth2UserService;
import com.fpt.security.auth2.OAuth2AuthenticationSuccessHandler;
import com.fpt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true,jsr250Enabled = true)
public class Authenticate extends WebSecurityConfigurerAdapter{

	@Bean
	public BCryptPasswordEncoder getPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Autowired
	UserService userService;

	@Autowired
	CustomOAuth2UserService oAuth2UserService;

	@Autowired
	OAuth2AuthenticationSuccessHandler oauthSuccessHandler;

	@Autowired
	private JwtTokenFilter jwtTokenFilter;

	@Autowired
	private JwtConfigurer jwtConfigurer;

	@Bean(BeanIds.AUTHENTICATION_MANAGER)
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}


	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(this.userService);
	}
	
	@Override
	public void configure(HttpSecurity http) throws Exception {
		http
		.cors().and()
		.csrf()
		.disable()
        .authorizeRequests()
        .antMatchers("/admin/**").hasRole("ADMIN")
        .antMatchers("/staff/**").hasAnyRole("STAFF", "ADMIN")
				.antMatchers("/guest/order/**").authenticated()
//				.anyRequest().permitAll();
        .anyRequest().permitAll()

		// oauth2
				.and()
				.oauth2Login()
				.authorizationEndpoint().baseUri("/oauth2/authorize")
				.and()
				.userInfoEndpoint().userService(oAuth2UserService)
				.and()
				.successHandler(oauthSuccessHandler)
				.and()
				.apply(jwtConfigurer);
		http.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
	}
}
