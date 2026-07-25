# CareerConnect Backend 🚀

A secure and scalable **Spring Boot REST API** for a Job Portal application. It provides user authentication using **JWT**, secure password encryption with **BCrypt**, and complete CRUD operations for job management.

---

## ✨ Features

- 🔐 User Registration
- 🔑 User Login with JWT Authentication
- 🔒 Password Encryption using BCrypt
- 💼 Create Job
- 📋 View All Jobs
- 🔍 View Job by ID
- ✏️ Update Job Details
- 🗑️ Delete Job
- ⚠️ Global Exception Handling
- 📄 RESTful API Design
- 🗄️ MySQL Database Integration
- 📖 Swagger API Documentation

---

## 🛠️ Tech Stack

- Java 17
- Spring Boot
- Spring Security
- Spring Data JPA (Hibernate)
- JWT (JSON Web Token)
- MySQL
- Maven
- Swagger / OpenAPI

---

## 📁 Project Structure

```
src
├── main
│   ├── java
│   │   └── com.harshitha.careerconnect
│   │       ├── config
│   │       ├── controller
│   │       ├── entity
│   │       ├── exception
│   │       ├── repository
│   │       ├── security
│   │       └── service
│   └── resources
│       └── application.properties
```

---

## 🔐 Authentication APIs

### Register User

```
POST /users/register
```

### Login User

```
POST /users/login
```

Returns a JWT token that must be included in the Authorization header for protected endpoints.

```
Authorization: Bearer <your-jwt-token>
```

---

## 💼 Job APIs

### Create Job

```
POST /jobs
```

### Get All Jobs

```
GET /jobs
```

### Get Job By ID

```
GET /jobs/{id}
```

### Update Job

```
PUT /jobs/{id}
```

### Delete Job

```
DELETE /jobs/{id}
```

---

## ⚙️ Running the Project

### Clone the repository

```bash
git clone https://github.com/Harshitha-Sudhakar20/CareerConnect-Backend.git
```

### Navigate to the project

```bash
cd CareerConnect-Backend
```

### Configure MySQL

Update the database configuration in `application.properties`.

### Run the application

```bash
mvn spring-boot:run
```

The application will start on:

```
http://localhost:8081
```

---

## 📖 Swagger API Documentation

After running the application, open:

```
http://localhost:8081/swagger-ui/index.html
```

---

## 🧪 Tools Used

- IntelliJ IDEA
- Maven
- MySQL
- Swagger UI
- Git
- GitHub
- Postman

---

## 🚀 Future Enhancements

- Job Search
- Pagination & Sorting
- Role-Based Authorization (Admin/User)
- Resume Upload
- Job Application Module
- Email Notifications
- Docker Support
- Cloud Deployment (Render/Railway/AWS)

---

## 👩‍💻 Author

**Harshitha Sudhakar**

GitHub: https://github.com/Harshitha-Sudhakar20
