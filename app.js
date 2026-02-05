import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Needed for ES modules to resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// ✅ Health check (browser-safe)
app.get("/api/health", (req, res) => {
  res.json({
      status: "vibey alive",
          uptime: process.uptime(),
              timestamp: Date.now()
                });
                });

                // Serve static frontend
                app.use(express.static(path.join(__dirname, "public")));

                // Fallback to index.html for root
                app.get("/", (req, res) => {
                  res.sendFile(path.join(__dirname, "public", "index.html"));
                  });

                  // Railway / local port handling
                  const PORT = process.env.PORT || 3000;

                  app.listen(PORT, () => {
                    console.log(`Server running on port ${PORT}`);
                    });