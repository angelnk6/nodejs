import express from "express";

const app = express();

// Required for Railway
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Root check
app.get("/", (req, res) => {
  res.send("alphasec backend alive");
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({
        status: "alive",
            uptime: process.uptime(),
                timestamp: Date.now()
                  });
                  });

                  // Start server
                  app.listen(PORT, () => {
                    console.log(`Server running on port ${PORT}`);
                    });