const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend alive");
  });

  app.get("/api/health", (req, res) => {
    res.json({
        status: "alive",
            pid: process.pid,
                uptime: process.uptime()
                  });
                  });

                  app.listen(PORT, () => {
                    console.log(`Server running on port ${PORT}`);
                    });