# 🏫 School Management API

A lightweight RESTful API built with **Node.js**, **Express**, and **MySQL** to manage school-related data including schools and getting schools based on proximity to user location.

## 🧪 Postman Documentation

View full API documentation & try out requests using Postman:

📄 [Click Here to View](https://documenter.getpostman.com/view/37122540/2sB2ixkEFi)

---

Backend API live at : [API](https://schoolmanagement-api-production.up.railway.app/api/schools)


## 🚀 Features

- Add and list schools with location data (latitude, longitude)
- Designed for scalability and cloud deployment (Railway)
- Postman documentation for easy testing and onboarding

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **MySQL** (Hosted on [Railway](https://railway.app))
- **Postman** for API testing & documentation

---

##  Architecture & Tech Stack

| Layer                    | Description                                                                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **MVC Architecture**     | Follows a clean Model-View-Controller pattern:<br>• **Model** handles data and schema logic<br>• **Controller** processes HTTP requests<br>• **Routes** map endpoints cleanly to controllers |
| **Express.js Backend**   | Built using Express.js for its minimal and scalable HTTP framework, supporting RESTful API design and middleware integration                               |
| **Rate Limiting**       | Secured with `express-rate-limit` middleware to prevent abuse, control traffic spikes, and ensure server reliability                                        |
| **Connection Pooling**   | MySQL database connections optimized using `mysql2` pooling to reduce overhead and manage concurrent queries efficiently                                     |
| **Cloud Deployment**     | Deployed on [Railway](https://railway.app) — a cloud-native deployment platform supporting CI/CD, environmental configs, and secure database hosting        |
| **Postman Documentation**| A well-structured Postman collection is provided with example requests, responses, and endpoint categories. Public docs are accessible for external devs     |

---


## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Rajeswari-Machina/SchoolManagement-API.git
cd SchoolManagement-API
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
PORT=5000
```

> You can get these from your [Railway MySQL instance](https://railway.app).

### 4. Start the server

```bash
npm start
```

> Server will run at `http://localhost:5000`

---

##  API Endpoints

###  Add School

`POST /schools`

**Request Body:**

```json
{
  "name": "Green Valley High School",
  "address": "123 Elm Street, Springfield",
  "latitude": 37.7749,
  "longitude": -122.4194
}
```

###  Get All Schools

`GET /schools`

---

## 🧱 Database Schema (MySQL)

### `schools`

| Field      | Type     | Description                |
|------------|----------|----------------------------|
| id         | INT      | Primary Key, Auto Increment |
| name       | TEXT     | Name of the school          |
| address    | TEXT     | Address of the school       |
| latitude   | FLOAT    | Latitude                    |
| longitude  | FLOAT    | Longitude                   |

### `user_coordinates`

| Field      | Type     | Description                  |
|------------|----------|------------------------------|
| id         | INT      | Primary Key, Auto Increment   |
| user_id    | INT      | Associated user ID            |
| latitude   | FLOAT    | User latitude                 |
| longitude  | FLOAT    | User longitude                |

---

## 👩‍💻 Author

**Rajeswari Machina**  
📫 [@Rajeswari-Machina](https://github.com/Rajeswari-Machina)

---

