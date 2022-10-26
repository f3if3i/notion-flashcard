import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY })

// const databaseId = process.env.NOTION_DATABASE_ID

export const queryDatabases = async (databaseId: string) => {
    // const userId = "7504f0e2-0a2e-42ac-851f-451d13d92809"
    // const responseUser = await notion.users.retrieve({ user_id: userId })
    const responses = await notion.databases.query({ database_id: databaseId! })
    console.log(responses)
    console.log("Successfully fetched!")
    return responses

}

export const retrieveUser = async (userId: string) => {
    // const userId = "2db807d6-77c7-46ff-a3ff-8ff049caaed7"
    const response = await notion.users.retrieve({ user_id: userId })
    console.log(response)
    return response
}

export const retrieveDatabase = async (databaseId: string) => {
    const response = await notion.databases.retrieve({ database_id: databaseId })
    console.log(response)
    return response
}