import { PlaceholdersParams } from '@/lib/node-mailer'
import fs from 'node:fs'

export class HtmlFileHandler {
    static async readHTMLFile(filePath: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    static updateHTMLContent({
        placeholders,
        htmlString,
    }: {
        placeholders: PlaceholdersParams
        htmlString: string
    }): string {
        let updatedHtml = htmlString
        for (const [placeholder, value] of Object.entries(placeholders)) {
            const regex = new RegExp(`\\[${placeholder}\\]`, 'g')
            updatedHtml = updatedHtml.replace(regex, value)
        }
        return updatedHtml
    }
}
