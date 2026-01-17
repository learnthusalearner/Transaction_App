# Transaction App 💳

A full-stack **Transaction Management Application** that enables users to manage, track, and analyze transactions efficiently using a modern web stack.

---

## 🚀 Project Demo

🎥 **YouTube Walkthrough:**  
https://www.youtube.com/watch?v=vhejMe-FTIs

> GitHub README does not support embedded video playback, but the link opens the full demo.

---

## 🧠 Features

- Create and manage transactions
- Organized transaction records
- Clean and responsive UI
- RESTful backend APIs
- Dockerized application
- Scalable full-stack architecture

---

## 🛠 Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- CSS

### Backend
- Node.js
- Express.js
- MongoDB

### DevOps / Tools
- Docker
- Git & GitHub

---

## 📁 Project Structure

```
Transaction_App/
│
├── backend/        # Node.js + Express backend
├── frontend/       # React frontend
├── Dockerfile      # Docker configuration
├── .dockerignore
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/learnthusalearner/Transaction_App.git
cd Transaction_App
```

---

### 2️⃣ Backend Setup
```bash
cd backend
npm install
npm start
```

Backend runs on:
```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm start
```

Frontend runs on:
```
http://localhost:3000
```

---

## 🐳 Docker Setup

Build and run the application using Docker:

```bash
docker build -t transaction-app .
docker run -p 3000:3000 transaction-app
```

---

## 📡 API Overview (Sample)

| Method | Endpoint        | Description             |
|------|----------------|-------------------------|
| GET  | /transactions  | Get all transactions   |
| POST | /transactions  | Add a new transaction  |

---

## 📈 Future Enhancements

- User authentication (JWT)
- Analytics dashboards
- Search and filters
- Export data (CSV/PDF)
- Cloud deployment

---

## 🤝 Contributing

Pull requests are welcome.  
For major changes, please open an issue first.

---

## 📄 License

MIT License

---

## 👤 Author

**Kunal Srivastava**  
GitHub: https://github.com/learnthusalearner

---

⭐ If you find this project useful, please star the repository!
