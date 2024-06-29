package dev.skumar.core

import java.io.File

/**
 * Takes "fileName.ext" as parameter from "assets/html/pages" directory.
 * @return HTML code as text from the file
 */
fun parseHtmlPage(filePath: String) : String {
    val file = File("$DIR_HTML_PAGES/$filePath")
    return file.readText()
}


fun String.appendCode(code: String): String {
    return "${this}\n${code}"
}