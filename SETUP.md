# Softwaregini Fullstack Challenge

## Setup

### Backend

You need to have at least Java 17 installed. Gradle is also needed.

In the backend directory, run
```gradle bootRun```

The backend should start on port 8080. You can check if it is running by opening http://localhost:8080/products in your
browser.

The backend is a simple Spring Boot application written in Kotlin. It uses an In-memory database that is automatically
reset on each startup. The schema is created automatically based on the classes annotated with @Entity. Mock data is
created on startup. Furthermore, there is a scheduler that creates a new update for a random software product every 10
seconds.

When the application is running, a swagger UI is available at `http://localhost:8080/swagger-ui/index.html` where you can see the
available endpoints and try them

### Frontend

You need to have Node and npm installed.

In the frontend directory, run
```npm install```
```npm start```

The frontend should start on port 3000. You can check if it is running by opening http://localhost:3000 in your browser.