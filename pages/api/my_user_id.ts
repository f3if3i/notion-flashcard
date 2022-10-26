// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { Client } from "@notionhq/client"
import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type Data = {
  // response: PartialDatabaseObjectResponse
	userId: string
}

const notion = new Client({
    auth: process.env.NOTION_KEY,
})

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    (async () => {
        const databaseId = process.env.NOTION_DATABASE_ID 
        const response = await notion.databases.retrieve({ database_id: databaseId as string }) as DatabaseObjectResponse
        const userId = response.created_by.id 
        res.status(200).json({ userId: userId })
    })()
}
