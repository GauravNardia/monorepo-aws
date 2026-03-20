import {client} from "@repo/db/client"
import dotenv from "dotenv";

dotenv.config({
  path: "../../packages/prisma/.env"
});

const page = async() => {
  const user = await client.user.findFirst()
  return (
    <div>
      {user?.username}
      {user?.password}
    </div>
  )
}

export default page

