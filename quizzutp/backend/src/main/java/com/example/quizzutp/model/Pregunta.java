
package com.quizzutp.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Pregunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String enunciado;

    @OneToMany(mappedBy = "pregunta", cascade = CascadeType.ALL)
    private List<Opcion> opciones;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public List<Opcion> getOpciones() {
        return opciones;
    }

    public void setOpciones(List<Opcion> opciones) {
        this.opciones = opciones;
    }

   
    
}
