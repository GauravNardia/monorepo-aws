import dotenv from "dotenv";

dotenv.config({
  path: "../../packages/prisma/.env"
});
import  { WebSocketServer } from "ws"
import { client } from "@repo/db/client"
console.log("DB:", process.env.DATABASE_URL);

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async(socket) => {
    const res = await client.user.create({
        data: {
        username: Math.random().toString(),
        password: Math.random().toString()
        }
    })
    console.log(res)
    socket.send("HI from the websocket server")
})