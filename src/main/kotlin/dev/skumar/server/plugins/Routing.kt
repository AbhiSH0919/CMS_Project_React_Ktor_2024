package dev.skumar.server.plugins


import dev.skumar.core.DIR_ASSETS
import dev.skumar.core.DIR_RESOURCES
import dev.skumar.feature_admin.presentation.admin
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.io.File

fun Application.configureRouting() {

    routing {

        staticFiles("/static", File(DIR_ASSETS))

        staticResources("/resources", DIR_RESOURCES)

        admin()

    }

    //
    // To be extract in other file later
    install(StatusPages) {
        exception<Throwable> { call, cause ->
            call.respondText(text = "500: $cause" , status = HttpStatusCode.InternalServerError)
        }
    }
}

