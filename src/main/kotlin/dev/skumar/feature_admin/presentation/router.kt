package dev.skumar.feature_admin.presentation

import dev.skumar.feature_admin.data.questionSet
import io.ktor.server.freemarker.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.admin() {

    get("/cms-desk") {

        val Admin = object {
            val name = "AbhiSH0919"
        }

        val questionSet = questionSet

        call.respond(
            FreeMarkerContent(
                "pages/admin.ftl",
                mapOf(
                    "admin" to Admin,
                    "sets" to questionSet
                    )
            )
        )

    }
}