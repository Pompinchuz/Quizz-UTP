package com.example.quizzutp;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@SpringBootApplication
@EntityScan(basePackages = {"com.quizzutp.backend.model", "com.example.quizzutp.model"})
@ComponentScan(basePackages = "com.quizzutp.backend")
public class QuizzutpApplication {

	public static void main(String[] args) {

		Dotenv dotenv = Dotenv.load();
		System.setProperty("URL_D", dotenv.get("URL_D"));
		System.setProperty("USER_D", dotenv.get("USER_D"));
		System.setProperty("PASSWORD_D", dotenv.get("PASSWORD_D"));
		SpringApplication.run(QuizzutpApplication.class, args);
	}

}
