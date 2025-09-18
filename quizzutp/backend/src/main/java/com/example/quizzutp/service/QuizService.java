package com.example.quizzutp.service;

import com.example.quizzutp.model.Quiz;
import com.example.quizzutp.repository.QuizRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService {
    private final QuizRepository repo;

    public QuizService(QuizRepository repo) { this.repo = repo; }

    public List<Quiz> findAll() { return repo.findAll(); }
    public Optional<Quiz> findById(Long id) { return repo.findById(id); }
    public Quiz save(Quiz q) { return repo.save(q); }
    public void delete(Long id) { repo.deleteById(id); }
}
