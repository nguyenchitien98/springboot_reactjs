package com.fpt.jwt;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fpt.dto.CustomUserDetail;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@Component
@Slf4j
@RequiredArgsConstructor
public class JwtHelper {

    private final String JWT_SECRET = "sapoooooo";

    private final long JWT_EXPIRATION = 604800000L;


    public String generateTJwtToken(CustomUserDetail customUserDetail) throws JsonProcessingException {
        Date now = new Date();
        Date exp = new Date(now.getTime() + JWT_EXPIRATION);
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(customUserDetail.getAccount());
        return Jwts.builder()
                .setSubject(customUserDetail.getUsername())
                .setIssuedAt(now)
                .setExpiration(exp)
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
                .claim("user", json)
                .compact();
    }


    public String createToken(String username, String role) {
        Claims claims = Jwts.claims().setSubject(username);
        claims.put("role", role);
        Date now = new Date();
        Date validity = new Date(now.getTime() + JWT_EXPIRATION);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, JWT_SECRET)
                .compact();
    }

    public String getClaim(String jwtToken) {
        return Jwts.parser()
                .setSigningKey(JWT_SECRET)
                .parseClaimsJws(jwtToken)
                .getBody().get("user", String.class);
    }

    public String getUsernameFromJwt(String jwtToken) {
        return Jwts.parser()
                .setSigningKey(JWT_SECRET)
                .parseClaimsJws(jwtToken)
                .getBody()
                .getSubject();
    }

    public String parseJwt(HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization");
        if(StringUtils.hasText(jwtToken) && jwtToken.startsWith("Bearer ")){
            return jwtToken.substring(7,jwtToken.length());
        }
        return null;
    }

    public boolean validateJwtToken(String jwtToken) {
        try {
            Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(jwtToken);
            return true;
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }
        return false;
    }

}
