package dev.skumar.server.plugins

import dev.skumar.core.DIR_TEMPLATES
import io.ktor.server.application.*
import io.ktor.server.freemarker.*
import java.io.File

fun Application.configureTemplating() {
    install(FreeMarker) {

        setDirectoryForTemplateLoading(File(DIR_TEMPLATES))

    }
}