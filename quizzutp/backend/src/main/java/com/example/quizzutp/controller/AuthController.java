package com.example.quizzutp.controller;

import com.example.quizzutp.model.Usuarios;
import com.example.quizzutp.service.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    
    @Autowired
    private UsuariosService usuariosService;
    
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Usuarios usuario) {
        try {
            Usuarios newUsuario = usuariosService.register(usuario);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("user", newUsuario);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        try {
            Usuarios usuario = usuariosService.login(
                credentials.get("username"),
                credentials.get("password")
            );
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("user", usuario);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @PutMapping("/score/{userId}")
    public ResponseEntity<?> updateScore(@PathVariable Long userId, @RequestBody Map<String, Integer> scoreData) {
        try {
            Usuarios usuario = usuariosService.updateScore(userId, scoreData.get("score"));
            return ResponseEntity.ok(usuario);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}