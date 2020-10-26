const fs = require("fs")
const path = require("path")
const fm = require("front-matter")
const package = require("../package.json")

const DESCRIPTION_IDENTIFIER_START = "<!-- %AUTO_DOCUMENT_DESCRIPTION_START% -->"
const DESCRIPTION_IDENTIFIER_END = "<!-- %AUTO_DOCUMENT_DESCRIPTION_END% -->"
const SNIPPETS_IDENTIFIER_START = "<!-- %AUTO_DOCUMENT_SNIPPETS_START% -->"
const SNIPPETS_IDENTIFIER_END = "<!-- %AUTO_DOCUMENT_SNIPPETS_END% -->"
const REPOSITORY_URL = package.homepage.split("#")[0]
const REPOSITORY_MAIN_BRANCH = "main"
const README_PATH = path.resolve(__dirname, "../README.md")
const SRC_DIR_PATH = path.resolve(__dirname, "../src")
const IO_OPTIONS = { encoding: "utf-8" }
const NOT_DOT_START = name => !name.startsWith(".")
const ALL_UNDERSCORES_PATTERN = /_/ug

;(async () => {
    const generateSectionJobs = fs.readdirSync(SRC_DIR_PATH, IO_OPTIONS).filter(NOT_DOT_START).map(async (category) => {
        const categoryDirPath = path.resolve(SRC_DIR_PATH, category)
        const generateRowsJobs = fs.readdirSync(categoryDirPath, IO_OPTIONS).filter(NOT_DOT_START).map(async (snippet) => {
            const name = snippet.split(".").slice(0, -1)[0].replace(ALL_UNDERSCORES_PATTERN, " ")
            const url = `${REPOSITORY_URL}/blob/${REPOSITORY_MAIN_BRANCH}/src/${category}/${snippet}`
            const filePath = path.resolve(SRC_DIR_PATH, `./${category}/${snippet}`)
            const markdown = await fs.promises.readFile(filePath, IO_OPTIONS)
            const { attributes } = fm(markdown)
            return `| [${name}](${url}) | ${attributes.description} | ${typeof attributes.prefix === "string" ? `<kbd>${attributes.prefix}</kbd>` : attributes.prefix.map(p => `<kbd>${p}</kbd>`).join(", ")} | ${attributes.scope} |`
        })
        const rows = await Promise.all(generateRowsJobs)
        return `## ${category}
| Name | Description | Prefix | Scope |
| :--- | :--- | :--- | :--- |
${rows.join("\n")}`
    })

    const sections = await Promise.all(generateSectionJobs)
    const snippetsDocument = sections.join("\n\n")
    const descriptionDocument = package.description

    let readmeContent = fs.readFileSync(README_PATH, IO_OPTIONS)
    readmeContent = readmeContent.substring(
        0,
        readmeContent.indexOf(DESCRIPTION_IDENTIFIER_START) + DESCRIPTION_IDENTIFIER_START.length
    ) + readmeContent.substring(
        readmeContent.indexOf(DESCRIPTION_IDENTIFIER_END)
    )
    readmeContent = readmeContent.substring(
        0,
        readmeContent.indexOf(SNIPPETS_IDENTIFIER_START) + SNIPPETS_IDENTIFIER_START.length
    ) + readmeContent.substring(
        readmeContent.indexOf(SNIPPETS_IDENTIFIER_END)
    )
    
    const output = readmeContent
        .replace(DESCRIPTION_IDENTIFIER_START, `${DESCRIPTION_IDENTIFIER_START}\n${descriptionDocument}\n`)
        .replace(SNIPPETS_IDENTIFIER_START, `${SNIPPETS_IDENTIFIER_START}\n${snippetsDocument}\n`)
    fs.writeFileSync(README_PATH, output, IO_OPTIONS)
})()
