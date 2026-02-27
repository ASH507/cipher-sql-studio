# CipherSQLStudio

CipherSQLStudio is a browser-based SQL learning platform where students can practice SQL queries against pre-configured assignments with real-time execution and intelligent hints.

---

## 🚀 Features

- View SQL assignments with difficulty levels
- Write SQL queries in Monaco Editor
- Execute queries against PostgreSQL database
- Secure query validation (blocks DROP, DELETE, ALTER)
- Real-time results display
- Hint generation system
- Mobile-first responsive design using SCSS

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Monaco Editor
- SCSS (Mobile-first responsive design)

### Backend
- Node.js
- Express.js
- PostgreSQL (Sandbox execution database)
- MongoDB Atlas (Assignment storage)

---

## 📂 Folder Structure

```
cipher-sql-studio/
│
├── backend/
│   ├── config/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── seed.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── styles.scss
│
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/cipher-sql-studio.git
cd cipher-sql-studio
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

Create a `.env` file inside backend:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
PG_USER=postgres
PG_PASSWORD=your_password
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=cipher_sandbox
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🔄 Data Flow

1. User writes SQL query in Monaco Editor.
2. React sends POST request to `/api/query/execute`.
3. Express validates the query.
4. PostgreSQL executes the query.
5. Express returns JSON response.
6. React updates state.
7. Results table renders.

---

## 🔐 Security

- Query validation middleware
- Prevents destructive SQL operations
- Allows only safe execution queries

---

## 📈 Future Improvements

- Full LLM API integration for hints
- Authentication system
- Save query attempts
- Schema viewer panel
- Deployment to cloud

---

## 👩‍💻 Author

Aishwarya Tewari
