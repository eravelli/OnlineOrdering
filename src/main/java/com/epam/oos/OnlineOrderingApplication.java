package com.epam.oos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.epam")
@EnableJpaRepositories("com.epam.oos.dao")
public class OnlineOrderingApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineOrderingApplication.class, args);
	}

}
