import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'

new Elysia()
    .use(cors({
        origin: '*'
    }))
    .get("/ping", () => JSON.stringify({a:"pong"}))
    .get("/test", async (req) => {
        const url = new URL(req.request.url);
        const model = url.searchParams.get('model');
        const prompt = url.searchParams.get('prompt');
      
        // Appel direct au serveur DeepSeek
        const res = await fetch("http://127.0.0.1:8081/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            temperature: 1,
            model: model,
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role:"user", content: prompt }
            ]
          })
        });

        const data = await res.json();

        return data
      })
    .listen(
        3001, 
        () => console.log("Backend running on http://localhost:3001")
    )
