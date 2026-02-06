import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

/* =========
   HEALTH CHECK
      ========= */
      app.get("/", (req, res) => {
        res.send("Vibey backend alive ✨");
        });

        /* =========
           BROWSER TEST (GET)
              ========= */
              app.get("/ai", (req, res) => {
                res.json({
                    status: "ok",
                        message: "AI route is live. Use POST to talk to the model."
                          });
                          });

                          /* =========
                             AI ROUTE (POST)
                                ========= */
                                app.post("/ai", async (req, res) => {
                                  try {
                                      const prompt = req.body.prompt || "Say hi from Vibey";

                                          const response = await fetch(
                                                "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
                                                      {
                                                              method: "POST",
                                                                      headers: {
                                                                                "Authorization": `Bearer ${process.env.HF_API_KEY}`,
                                                                                          "Content-Type": "application/json"
                                                                                                  },
                                                                                                          body: JSON.stringify({
                                                                                                                    inputs: prompt
                                                                                                                            })
                                                                                                                                  }
                                                                                                                                      );

                                                                                                                                          const data = await response.json();

                                                                                                                                              res.json({
                                                                                                                                                    output: data?.[0]?.generated_text || data
                                                                                                                                                        });
                                                                                                                                                          } catch (err) {
                                                                                                                                                              console.error(err);
                                                                                                                                                                  res.status(500).json({ error: "AI request failed" });
                                                                                                                                                                    }
                                                                                                                                                                    });

                                                                                                                                                                    /* =========
                                                                                                                                                                       START SERVER
                                                                                                                                                                          ========= */
                                                                                                                                                                          app.listen(PORT, () => {
                                                                                                                                                                            console.log(`Vibey listening on ${PORT}`);
                                                                                                                                                                            });