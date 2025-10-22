package com.example.quizzutp;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@SpringBootApplication

public class QuizzutpApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
		System.setProperty("URL_D", dotenv.get("URL_D"));
		System.setProperty("USER_D", dotenv.get("USER_D"));
		System.setProperty("PASS_D", dotenv.get("PASS_D"));
	SpringApplication.run(QuizzutpApplication.class, args);
	}

}
