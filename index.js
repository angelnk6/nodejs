const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vibey backend alive ✨");
  });

  app.post("/ai", async (req, res) => {
    try {
        const { prompt } = req.body;

            if (!prompt) {
                  return res.status(400).json({ error: "Missing prompt" });
                      }

                          const response = await fetch(
                                "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
                                      {
                                              method: "POST",
                                                      headers: {
                                                                Authorization: `Bearer ${process.env.HF_API_KEY}`,
                                                                          "Content-Type": "application/json",
                                                                                  },
                                                                                          body: JSON.stringify({
                                                                                                    inputs: prompt,
                                                                                                            }),
                                                                                                                  }
                                                                                                                      );

                                                                                                                          const data = await response.json();

                                                                                                                              res.json({
                                                                                                                                    output: data[0]?.generated_text || data,
                                                                                                                                        });
                                                                                                                                          } catch (err) {
                                                                                                                                              res.status(500).json({ error: err.message });
                                                                                                                                                }
                                                                                                                                                });

                                                                                                                                                const PORT = process.env.PORT || 8080;
                                                                                                                                                app.listen(PORT, "0.0.0.0", () => {
                                                                                                                                                  console.log(`Vibey listening on ${PORT}`);
                                                                                                                                                  });