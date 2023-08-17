import { writeFileSync } from "fs"

import {
    createPageTemplate,
} from "./templates"

const getArgValue = (arg: string): { name: string; value: string } => {
    const initStr = arg.slice(0, 2)
    if (initStr !== "--") {
        throw new Error("please input --")
    }

    const equalIndex = arg.indexOf("=")
    if (equalIndex === -1) {
        throw new Error(
            "use --name=pageName syntax"
        )
    }
    const name = arg.slice(2, equalIndex)
    if (name.length === 0) {
        throw new Error("arguments missing")
    }
    if (name !== "name") {
        throw new Error(
            "use --name=pagename syntax"
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
        const pageName = getArgValue(process.argv[3])
        const upperCases = pageName.value.charAt(0).toUpperCase() + pageName.value.slice(1)

        writeFileSync(
            `pages/${pageName.value}.tsx`,
            createPageTemplate(upperCases)
        )
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
    }
}

main()