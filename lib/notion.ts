import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

export const queryDatabases = async () => {
    try {
        const responses = await notion.databases.query({ database_id: databaseId! })
        console.log(responses)
        console.log("Successfully fetched!")
        return responses
    } catch (error: any) {
        console.error(error.body)
    }
}

export const retrieveUser = async () => {
    const userId = "d40e767c-d7af-4b18-a86d-55c61f1e39a4"
    const response = await notion.users.retrieve({ user_id: userId })
    console.log(response)
}