import { writeFileSync } from "fs"

import {
    createPageTemplate,
    createStyleTemplate,
} from "./templates"

const getArgValue = (arg: string): { name: string; value: string } => {
    console.log(arg)
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
        const lowerCases = pageName.value.charAt(0).toUpperCase() + pageName.value.slice(1)

        writeFileSync(
            `pages/${lowerCases}.tsx`,
            createPageTemplate(pageName.value)
        )
        writeFileSync(`styles/${pageName.value}.module.css`, createStyleTemplate())
    } catch (error) {
    // eslint-disable-next-line no-console
        console.error(error)
    }
}

main()