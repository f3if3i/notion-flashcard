import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useSelector } from "react-redux"
import notion from "../lib/notion"
import { selectDatabase, setDatabaseState } from "../store/databaseSlice"
// import { User } from "../pages/api/user"
import { selectUser, setUserState } from "../store/userSlice"
// import { DBDataType, DBInfoType } from "../types/database"
import { updateLocalStorage } from "../utils/localStorage"
import { isDBIdValid } from "../utils/parseUrl"

export const useFetch = (id: string) => {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    // const [database, setDatabase] = useState<DBDataType[]>()
    // const [databaseInfo, setDatabaseInfo] = useState<DBInfoType>({ name: "", id: "" })

    // useState -> redux
    // const [user, setUser] = useState<User>({ userId: "", userName: "" })
    const database = useSelector(selectDatabase)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const fetchData = async (id: string) => {
        if (!id) {
            return
        }
        setLoading(true)
        if (!isDBIdValid(id)) {
            setErrorMessage("😵 Oops, the url is invalid. Try another url!")
        }
        try {
            const response = await notion.retrieveUser({ database_id: id }) || []
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
                    updateLocalStorage(result.dbInfo)
                    dispatch(setUserState(result.dbOwner))
                    dispatch(setDatabaseState({ id: result.dbInfo.id, name: result.dbInfo.name, contents: result.dbContent }))
                }
            }
        )()

    }, [dispatch, id])

    return { loading, errorMessage, user, database, setErrorMessage }
}