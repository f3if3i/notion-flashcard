// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { Client } from "@notionhq/client"
import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export type User = {
  userId: string
	userName: string | null,
}

const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
})

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
    if (req.method === "POST") {
        (async () => {
            const { database_id } = JSON.parse(req.body)
            const response = await notion.databases.retrieve({ database_id: database_id as string }) as DatabaseObjectResponse
            const userId = response.created_by.id
            const responseUser = await notion.users.retrieve({ user_id: userId })
            const userName = responseUser.name 
            res.status(200).json({ userId: userId, userName: userName })
        })()
    }
}
