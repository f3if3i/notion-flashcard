// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { Client } from "@notionhq/client"
import { DatabaseObjectResponse, PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type Data = {
  results: (PageObjectResponse | PartialPageObjectResponse)[],
	databaseTitle: string
}

const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
})

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        (async () => {
            const { database_id } = JSON.parse(req.body)
            const responseDB = await notion.databases.retrieve({ database_id: database_id as string }) as DatabaseObjectResponse
            const databaseTitle = responseDB.title[0].plain_text
            const response = await notion.databases.query({ database_id: database_id }) 
            const results = response.results 
            res.status(200).json({ results : results, databaseTitle: databaseTitle })
        })()
    }
}
