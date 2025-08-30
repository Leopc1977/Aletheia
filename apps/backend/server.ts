import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'

new Elysia()
    .use(cors({
        origin: '*'
    }))
    .get("/ping", () => JSON.stringify({a:"pong"}))
    .get("/test", async () => {
    
        // Appel direct au serveur DeepSeek
        const res = await fetch("http://127.0.0.1:8081/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            temperature: 1,
            model: 'deepseek-llm-7b-chat.Q4_K_M',
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role:"user", content: "date release iron man film ?" }
            ]
          })
        });

        const data = await res.json();
        console.log(data)
        return data
      })
    .listen(
        3001, 
        () => console.log("Backend running on http://localhost:3001")
    )
