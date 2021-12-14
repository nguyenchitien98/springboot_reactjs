package com.fpt.jwt;

import com.fpt.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class JwtTokenFilter extends OncePerRequestFilter {

    @Autowired
    JwtHelper jwtHelper;

    @Autowired
    UserService userService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String jwt = this.getJwtFromRequest(request);
        if(StringUtils.hasText(jwt) && jwtHelper.validateJwtToken(jwt)) {
            String username = jwtHelper.getUsernameFromJwt(jwt);
            UserDetails userDetails = userService.loadUserByUsername(username);
            if(userDetails != null) {
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }
        filterChain.doFilter(request, response);
    }

    private String getJwtFromRequest(HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization");
        if(StringUtils.hasText(jwtToken) && jwtToken.startsWith("Bearer ")){
            return jwtToken.substring(7);
        }
        return null;
    }
}

//    Authentication authentication = jwtHelper.getAuthentication(jwt);
//            if (authentication!=null){
//                    SecurityContextHolder.getContext().setAuthentication(authentication);
//                    }
