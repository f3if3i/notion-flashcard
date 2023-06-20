import { existsSync, mkdirSync, writeFileSync } from "fs"

import {
    createComponentTemplate,
    createIndexTemplate,
    createStoryTemplate
} from "./templates"

const getArgValue = (arg: string) => {
    const initStr = arg.slice(0, 2)
    if (initStr !== "--") {
        throw new Error("please input --")
    }

    const equalIndex = arg.indexOf("=")
    if (equalIndex === -1) {
        throw new Error(
            "use --name=ComponentName syntax"
        )
    }
    console.log("equalIndex", equalIndex)
    const type = arg.slice(2, equalIndex)
    console.log("type", type)
    if (type.length === 0) {
        throw new Error("arguments missing")
    }
    let isTypeNameValid = false
    if (type === "name" || "category") {
        isTypeNameValid = true
    }
    if (!isTypeNameValid) {
        throw new Error(
            "use --name=Sample or --category=atoms syntax"
        )
    }

    const value = arg.slice(equalIndex + 1, arg.length)
    if (value.length === 0) {
        throw new Error("No arguments")
    }
    console.log("type", type)
    console.log("value", value)
    return value
}

const validateArgs = (args: string[]) => {
    if (args.length !== 5) {
        throw new Error(
            "The number of arguments is not correct"
        )
    }
}

const main = () => {
    try {
        validateArgs(process.argv)
        const componentName = getArgValue(process.argv[3])
        const componentCategory = getArgValue(process.argv[4])


        const componentPath = `components/${componentCategory}/${componentName}`
        const storyPath = `stories/${componentCategory}`
        if (!existsSync(componentPath)) {
            mkdirSync(componentPath, {
                recursive: true
            })
        }
        if (!existsSync(storyPath)) {
            mkdirSync(storyPath, {
                recursive: true
            })
        }
        writeFileSync(
            `${componentPath}/${componentName}.tsx`,
            createComponentTemplate(componentName)
        )
        writeFileSync(
            `${componentPath}/index.ts`,
            createIndexTemplate(componentName)
        )
        writeFileSync(
            `${storyPath}/${componentName}.stories.tsx`,
            createStoryTemplate(componentName, componentCategory)
        )
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
    }
}

main()