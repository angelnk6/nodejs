const express = require("express");
const path = require("path");

const app = express();

// Railway provides PORT automatically
const PORT = process.env.PORT || 8080;

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root check (what you're already seeing)
app.get("/", (req, res) => {
  res.send("backend alive");
  });

  // Health check endpoint (kept from old file)
  app.get("/_api/health", (req, res) => {
    res.json({
        status: "alive",
            uptime: process.uptime(),
                timestamp: new Date().toISOString()
                  });
                  });

                  // Example placeholder API route (safe, does nothing harmful)
                  app.get("/_api/ping", (req, res) => {
                    res.json({ pong: true });
                    });

                    // Start server — MUST listen on 0.0.0.0 for Railway
                    app.listen(PORT, "0.0.0.0", () => {
                      console.log(`Server running on port ${PORT}`);
                      });