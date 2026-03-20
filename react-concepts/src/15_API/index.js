const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 5000;

// ✅ MIDDLEWARES
app.use(cors()); // Allow frontend to call backend
app.use(express.json()); // parse JSON body

// Logging middleware – date, time, method, URL, IP, User-Agent
app.use((req, res, next) => {
  const now = new Date().toLocaleString();
  const ip = req.ip || req.connection.remoteAddress;
  const ua = req.get("User-Agent");
  console.log(`[${now}] ${req.method} ${req.url} | IP: ${ip} | UA: ${ua}`);
  next();
});

// Log POST body
app.use((req, res, next) => {
  if (req.method === "POST") {
    console.log(`[${new Date().toLocaleString()}] POST body:`, req.body);
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

// GET /api/users – fetch random users
app.get("/api/users", (req, res) => {
  const url = "https://randomuser.me/api/?results=6";

  fetch(url) // ✅ GET request (default)
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      res.json(data); // send API data to frontend
    })
    .catch((err) => {
      console.error("Backend fetch error:", err);
      res.status(500).json({ error: "Failed to fetch users" });
    });
});

// POST /api/posts – forward frontend data to jsonplaceholder
app.post("/api/posts", (req, res) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { title, body, userId } = req.body;

  // simple validation
  if (!title || !body || !userId) {
    return res
      .status(400)
      .json({ error: "userId, title, and body are required" });
  }

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ title, body, userId }), // forward whatever frontend sent
  })
    .then((response) => response.json())
    .then((data) => {
      // Send both backend-received data and JSONPlaceholder response
      res.json({
        frontendData: req.body, // what frontend sent
        placeholderResponse: data, // what external API returned
      });
    })
    .catch((err) => {
      console.error("Backend POST error:", err);
      res.status(500).json({ error: "Failed to post data" });
    });
});

app.listen(PORT, () => console.log(`Server Started at ${PORT} 🚀`));
