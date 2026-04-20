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

<img width="237" height="471" alt="Screenshot 2026-04-17 145811" src="https://github.com/user-attachments/assets/53580532-b119-48b4-a11c-6a7f8d3fdf49" />


---

### 🟢 Frontend (Project Setup)

<img width="161" height="349" alt="Screenshot 2026-04-17 145825" src="https://github.com/user-attachments/assets/561ce143-c911-4bd4-ab95-208221aa51ce" />


---

### 🟢 Spring boot installing
<img width="464" height="405" alt="Screenshot 2026-04-17 145801" src="https://github.com/user-attachments/assets/94da6468-8fbb-4fe9-97ca-74fc32aea928" />




---

### 🟢 Sending Message

![Sending Message](screenshots/send.png)

---

### 🟢 Real-Time Chat (2 Tabs)
<img width="959" height="516" alt="Screenshot 2026-04-17 145730" src="https://github.com/user-attachments/assets/269e3544-9ea7-4bd3-ad94-71e580ada0c1" />

<img width="960" height="506" alt="Screenshot 2026-04-17 145737" src="https://github.com/user-attachments/assets/70d54730-57ab-4af1-b512-69275ae65388" />



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
