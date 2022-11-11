import { Client } from "@notionhq/client"

// deprecated lib: for server-side rendering case 
const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY })

export const queryDatabases = async (databaseId: string) => {
    const responses = await notion.databases.query({ database_id: databaseId! })
    return responses

}

export const retrieveUser = async (userId: string) => {
    const response = await notion.users.retrieve({ user_id: userId })
    return response
}

export const retrieveDatabase = async (databaseId: string) => {
    const response = await notion.databases.retrieve({ database_id: databaseId })
    return response
}