import { useSelector } from "react-redux"
import { selectDatabase } from "../store/databaseSlice"
import { getTestElements } from "../utils/array"
import { useEffect, useState } from "react"

type testArrType = {
    name: string
    options: string[]
    description: string
}

export const useTest = () => {
    const database = useSelector(selectDatabase)
    const databaseContent = database.contents

    const [score, setStore] = useState<number>(0)
    const [testArr, setTestArr] = useState<testArrType[]>([])
    const testLength = 20
    const optionLength = 4
    useEffect(() => {
        if (databaseContent) {
            const testArray = getTestElements(databaseContent, testLength, optionLength)
            setTestArr(testArray)
        }
    }, [databaseContent])

    return { testArr, setTestArr, score, setStore }
}