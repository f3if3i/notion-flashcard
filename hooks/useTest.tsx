import { useSelector } from "react-redux"
import { selectDatabase } from "../store/databaseSlice"
import { selectUser } from "../store/userSlice"
import { getTestElements } from "../utils/array"
import { useState } from "react"

export const useTest = () => {
    const database = useSelector(selectDatabase)
    const databaseContent = database.contents

    const user = useSelector(selectUser)
    const [score, setStore] = useState<number>(0)
    const testLength = 20
    const optionLength = 4
    const testArray = getTestElements(databaseContent, testLength, optionLength)
    const [testArr, setTestArr] = useState(testArray)

    return { testArr, setTestArr, score, setStore, user }
}