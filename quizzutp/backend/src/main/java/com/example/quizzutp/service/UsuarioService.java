package com.example.quizzutp.service;

import com.example.quizzutp.model.Usuario;
import com.example.quizzutp.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {
    private final UsuarioRepository repo;

    public UsuarioService(UsuarioRepository repo) {
        this.repo = repo;
    }

    public Usuario register(Usuario usuario) {
        return repo.save(usuario);
    }

    public Optional<Usuario> login(String email, String password) {
        return repo.findByEmailAndPassword(email, password);
    }
}
