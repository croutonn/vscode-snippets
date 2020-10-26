const fs = require("fs")
const path = require("path")
const package = require("../package.json")

const DIST_DIR_PATH_FROM_ROOT = "snippets"
const DIST_DIR_PATH = path.resolve(__dirname, `../${DIST_DIR_PATH_FROM_ROOT}`)
const PACKAGE_JSON_PATH = path.resolve(__dirname, "../package.json")

const snippets = fs.readdirSync(DIST_DIR_PATH, { encoding: "utf-8" }).filter(file => file.endsWith(".json"))

const snippetsField = []

snippets.map(file => {
  const snippetFilePath = path.join(DIST_DIR_PATH, file)
  const snippetPathField = `./${DIST_DIR_PATH_FROM_ROOT}/${file}`
  const jsonString = fs.readFileSync(snippetFilePath, { encoding: "utf-8" })
  const json = JSON.parse(jsonString)
  const languages = new Set()

  Object.values(json).forEach(snippet => {
    snippet.scope.split(",").forEach(s => languages.add(s.trim()))
  })

  languages.forEach(language => {
    snippetsField.push({
      language,
      path: snippetPathField
    })
  })
})

package.contributes = package.contributes || {}
package.contributes.snippets = snippetsField

const output = JSON.stringify(package, null, 2)
fs.writeFileSync(PACKAGE_JSON_PATH, output, { encoding: "utf-8" })
