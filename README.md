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

<img width="960" height="500" alt="Screenshot 2026-04-20 153921" src="https://github.com/user-attachments/assets/68ce87d6-47a4-47e3-900c-09b450f0de06" />
<img width="219" height="292" alt="Screenshot 2026-04-20 153928" src="https://github.com/user-attachments/assets/804e502e-62f4-438a-8396-03bdbf9e0ae1" /> <img width="223" height="293" alt="Screenshot 2026-04-20 154035" src="https://github.com/user-attachments/assets/2cf56477-8771-4aaf-ad78-3fad20947987" />
<img width="959" height="503" alt="Screenshot 2026-04-20 154020" src="https://github.com/user-attachments/assets/f5926828-0aef-458f-b8fe-670d1bcbada2" />





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
