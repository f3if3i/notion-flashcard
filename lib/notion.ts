import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

export default async function posts() {
    try {
        const responses = await notion.databases.query({ database_id: databaseId! })
        console.log(responses)
        console.log("Successfully fetched!")
        return responses
    } catch (error: any) {
        console.error(error.body)
    }
}

// addItem("Yurts in Big Sur, California")