import { useEffect, useState } from "react"
import notion from "../lib/notion"
import { User } from "../pages/api/user"
import { DBDataType, DBInfoType } from "../types/database"
import { isDBIdValid } from "../utils/parseUrl"

export const useFetch = (id: string) => {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [database, setDatabase] = useState<DBDataType[]>()
    const [databaseInfo, setDatabaseInfo] = useState<DBInfoType>({ name: "", id: "" })
    const [user, setUser] = useState<User>({ userId: "", userName: "" })

    const fetchData = async (id: string) => {
        if (!id) {
            return
        }
        setLoading(true)
        if (!isDBIdValid(id)) {
            setErrorMessage("😵 Oops, the url is invalid. Try another url!")
        }
        try {
            const response = await notion.retreiveUser({ database_id: id }) || []
            const responseDB = await notion.queryDatabase({ database_id: id }) || []
            const filteredDatabase = responseDB && responseDB.data.results.map((data: { properties: { Name: { title: { plain_text: any }[] }; Description: { rich_text: { plain_text: any }[] } } }) => ({
                name: data.properties.Name.title[0].plain_text,
                description: data.properties.Description.rich_text[0].plain_text
            }))
            return {
                dbInfo: { name: responseDB.data.databaseTitle, id: id },
                dbContent: filteredDatabase,
                dbOwner: response.data
            }
        } catch (exception) {
            setLoading(false)
            setErrorMessage("Please check if the database format is valid and none of the field in database is empty")
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        (
            async function () {
                setErrorMessage("")
                const result = await fetchData(id)
                if (result) {
                    setUser(result.dbOwner)
                    setDatabase(result.dbContent)
                    setDatabaseInfo(result.dbInfo)
                }
            }
        )()

    }, [id])

    return { loading, errorMessage, user, database, databaseInfo, setErrorMessage }
}