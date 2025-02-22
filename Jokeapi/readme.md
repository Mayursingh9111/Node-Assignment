# 🎭 Random Jokes API

A simple RESTful API built using **Node.js** and **Express**. This API returns a random joke from a list every time you hit the endpoint. Perfect for beginners learning how to build APIs with Express.

---

## 📑 Table of Contents
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Project](#-running-the-project)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Testing](#-testing)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Features
- Returns a random joke from a predefined list.
- Lightweight and beginner-friendly.
- Easily extendable with new jokes.

---

## ✅ Prerequisites

Before running this project, make sure you have:
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [Git](https://git-scm.com/)

---

## 📥 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/SunnyKumar-code/joke-API.git
cd random-jokes-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

---

## 🚦 Running the Project

### Start the Server
```bash
node index.js
```

The server will run on `http://localhost:5000` by default.

---

## 🔥 Usage

### Get a Random Joke
Send a `GET` request to:
```
http://localhost:5000/
```

**Response Example:**
```json
{
  "id": 1,
  "joke": "Why don't scientists trust atoms? Because they make up everything!"
}
```

---

## 📌 API Endpoints
| Method | Endpoint | Description               |
|--------|----------|---------------------------|
| GET    | `/`      | Returns a random joke     |

---

## 🧪 Testing

You can use tools like [Postman](https://www.postman.com/) to test the API.

Example using `curl`:
```bash
curl http://localhost:5000/
```

---

## 📂 Project Structure
```
random-jokes-api/
│
├── joke.json       # List of jokes
├── index.js        # Main server file
├── package.json    # Project metadata & dependencies
└── README.md       # Documentation
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

