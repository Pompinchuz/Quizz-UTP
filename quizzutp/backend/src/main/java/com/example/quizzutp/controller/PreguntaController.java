package com.quizzutp.backend.controller;

import com.quizzutp.backend.model.Pregunta;
import com.quizzutp.backend.repository.PreguntaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/preguntas")
@CrossOrigin(origins = "http://localhost:5173")
public class PreguntaController {

    private final PreguntaRepository repo;

    public PreguntaController(PreguntaRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Pregunta> getAll() {
        return repo.findAll();
    }


    
}
