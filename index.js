const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("backend alive");
  });

  app.get("/_api/health", (req, res) => {
    res.json({
        status: "alive",
            uptime: process.uptime()
              });
              });

              app.listen(PORT, "0.0.0.0", () => {
                console.log(`Server running on port ${PORT}`);
                });