import { existsSync, mkdirSync, writeFileSync } from "fs"

import {
    createComponentTemplate,
    createIndexTemplate
} from "./templates"

const getArgValue = (arg: string): { name: string; value: string } => {
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
    const name = arg.slice(2, equalIndex)
    if (name.length === 0) {
        throw new Error("arguments missing")
    }
    if (name !== "name") {
        throw new Error(
            "use --name=ComponentName syntax"
        )
    }

    const value = arg.slice(equalIndex + 1, arg.length)
    if (value.length === 0) {
        throw new Error("No arguments")
    }

    return { name, value }
}

const validateArgs = (args: string[]) => {
    if (args.length !== 4) {
        throw new Error(
            "The number of arguments is not correct"
        )
    }
}

const main = () => {
    try {
        validateArgs(process.argv)
        const componentName = getArgValue(process.argv[3])

        const path = `components/${componentName.value}`
        if (!existsSync(path)) {
            mkdirSync(path, {
                recursive: true
            })
        }
        writeFileSync(
            `${path}/${componentName.value}.tsx`,
            createComponentTemplate(componentName.value)
        )
        writeFileSync(
            `${path}/index.ts`,
            createIndexTemplate(componentName.value)
        )
    } catch (error) {
    // eslint-disable-next-line no-console
        console.error(error)
    }
}

main()