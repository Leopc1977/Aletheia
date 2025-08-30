import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'

new Elysia()
    .use(cors({
        origin: '*'
    }))
    .get("/ping", () => "pong")
    .listen(
        3000, 
        () => console.log("Backend running on http://localhost:3000")
    )
