// PreguntaRepository.java
package com.quizzutp.backend.repository;

import com.quizzutp.backend.model.Pregunta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PreguntaRepository extends JpaRepository<Pregunta, Long> {}
