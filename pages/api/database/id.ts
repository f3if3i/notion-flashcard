// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { Client } from "@notionhq/client"
import { PartialDatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type Data = {
  response: PartialDatabaseObjectResponse
}

const notion = new Client({
    auth: process.env.NOTION_KEY,
})

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    (async () => {
        const { id } = req.query
        const databaseId = id
        const response = await notion.databases.retrieve({ database_id: databaseId as string })
        console.log(response)
        res.status(200).json({ response: response })
    })()
}
