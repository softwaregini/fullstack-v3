package com.softwaregini.backend

import com.softwaregini.backend.software.model.ProductSegment
import com.softwaregini.backend.software.model.SoftwareProduct
import com.softwaregini.backend.software.model.SoftwareProductRepository
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component

// creates software solution mock data on application startup
@Component
class SoftwareProductDataMock(
    private val softwareProductRepository: SoftwareProductRepository
) : ApplicationListener<ApplicationReadyEvent> {
    override fun onApplicationEvent(event: ApplicationReadyEvent) {
        if (softwareProductRepository.count() > 0) return
        (1..30).forEach {
            softwareProductRepository.save(
                SoftwareProduct(
                    name = "Product $it",
                    segment = ProductSegment.entries.toTypedArray().random(),
                )
            )
        }
    }
}