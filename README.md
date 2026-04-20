# 💬 WebSocket Chat Application (Spring Boot + React Vite)

A real-time chat application built using **Spring Boot (Backend)** and **React (Vite) + WebSocket (STOMP + SockJS)**.

---

## 🚀 Features

* Real-time messaging ⚡
* Multiple users support 👥
* WebSocket-based communication 🔗
* Clean UI (WhatsApp-style) 🎨
* Auto message broadcasting 📡

---

## 🛠️ Tech Stack

### Backend

* Spring Boot
* WebSocket (STOMP Protocol)
* SockJS

### Frontend

* React (Vite)
* @stomp/stompjs
* sockjs-client

---

## 📁 Project Structure

```
Backend (Spring Boot)
 ├── config/
 ├── controller/
 ├── model/

Frontend (React Vite)
 ├── components/
 │    ├── Chat.jsx
 │    ├── MessageInput.jsx
 │    ├── MessageList.jsx
 ├── App.jsx
 ├── main.jsx
```

---

## ⚙️ How It Works

### Message Flow

```
Frontend → /app/chat → Spring Boot → /topic/messages → Frontend
```

* `/app/chat` → Send message
* `/topic/messages` → Receive message

---

## ▶️ How to Run

### 🔹 Backend (Spring Boot)

1. Open project in IDE
2. Run application

Runs on:

```
http://localhost:8080
```

---

### 🔹 Frontend (React Vite)

```bash
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🧪 Testing

1. Open browser → http://localhost:5173
2. Open **2 tabs**
3. Enter different usernames
4. Send messages
5. Messages appear in real-time 🎉

---

## 📸 Screenshots

### 🟢 Backend (Spring Boot Setup)

![Spring Boot Project](screenshots/backend-project.png)

![WebSocket Config](screenshots/websocket-config.png)

![Controller](screenshots/controller.png)

---

### 🟢 Frontend (Project Setup)

![React Folder Structure](screenshots/frontend-structure.png)

![Components Code](screenshots/components.png)

![Vite Config](screenshots/vite-config.png)

---

### 🟢 Chat UI

![Chat UI](screenshots/chat-ui.png)

---

### 🟢 Sending Message

![Sending Message](screenshots/send.png)

---

### 🟢 Real-Time Chat (2 Tabs)

![Real Time](screenshots/realtime.png)

---

## ❗ Common Errors & Fixes

| Problem                  | Solution                             |
| ------------------------ | ------------------------------------ |
| Blank screen             | Check console (F12)                  |
| WebSocket not connecting | Ensure backend is running            |
| CORS error               | Allow origin in Spring Boot          |
| Messages not showing     | Check `/topic/messages` subscription |

---

## 📚 Concepts Used

* WebSocket Communication
* STOMP Protocol
* Publish/Subscribe Model
* Real-time Data Streaming

---

## 🎯 Future Improvements

* Private messaging 🔒
* User authentication 👤
* Chat history (Database) 💾
* Typing indicator ✍️

---

## 🙌 Author

**Shivali**
