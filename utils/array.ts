import { DBDataType } from "../types/database"
import { testItemType } from "../types/test"

export const getRandomElements = (array: any[], count: number) => {
    const shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    let extendedArray = [...array]
    while (extendedArray.length < count) {
        extendedArray = [...extendedArray, ...array]
    }

    const shuffledArray = shuffleArray(extendedArray)

    return shuffledArray.slice(0, count)
}

export const getNameElements = (array: DBDataType[]) => {
    return array.map(item => item.name)
}

export const getDescriptionElements = (array: DBDataType[]) => {
    return array.map(item => item.description)
}

export const getTestElements = (array: DBDataType[], count: number, optionsLength: number) => {
    const randomElements = getRandomElements(array, count)
    const nameElements = getNameElements(array)
    const testElements = randomElements.map(item => {
        const index = nameElements.indexOf(item.name)
        if (index !== -1) {
            nameElements.splice(index, 1)
        }
        const randomNameElements = getRandomElements(nameElements, optionsLength - 1)
        randomNameElements.push(item.name)
        const finalRandomElements = getRandomElements(randomNameElements, optionsLength)
        return {
            name: item.name,
            options: finalRandomElements,
            description: item.description
        }
    })
    return testElements as testItemType[]
}