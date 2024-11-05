package com.softwaregini.backend.software.controller

import com.softwaregini.backend.software.model.SoftwareProduct
import com.softwaregini.backend.software.model.SoftwareProductRepository
import com.softwaregini.backend.software.model.SoftwareProductUpdate
import com.softwaregini.backend.software.model.SoftwareProductUpdateRepository
import org.springframework.web.bind.annotation.*
import java.time.Instant
import java.util.UUID

@RestController
@RequestMapping("/products")
class SoftwareProductController(
    private val softwareProductRepository: SoftwareProductRepository,
    private val softwareProductUpdateRepository: SoftwareProductUpdateRepository
) {
    @GetMapping
    fun getSoftwareProducts(): List<SoftwareProduct> {
        return softwareProductRepository.findAll().toList()
    }

    @GetMapping("{softwareProductId}")
    fun getSoftwareProductUpdates(@PathVariable softwareProductId: UUID): List<SoftwareProductUpdate> {
        return softwareProductUpdateRepository.findBySoftwareProductIdOrderByUpdatedAtDesc(softwareProductId).toList()
    }

    @PostMapping("allSoftwareProductUpdatesSeen")
    fun postAllSoftwareProductUpdatesSeen(@RequestBody id: UUID): List<SoftwareProductUpdate> {
        val updates = softwareProductUpdateRepository.findBySoftwareProductIdOrderByUpdatedAtDesc(id)
        updates.forEach { update -> update.seen = true; update.updatedAt = Instant.now() }
        return softwareProductUpdateRepository.saveAll(updates).toList()
    }

    @PostMapping("softwareProductUpdatesSeen")
    fun postSoftwareSolutionUpdatesSeen(@RequestBody ids: List<UUID>): List<SoftwareProductUpdate> {
        val updates = softwareProductUpdateRepository.findAllById(ids)
        updates.forEach { update -> update.seen = true; update.updatedAt = Instant.now() }
        return softwareProductUpdateRepository.saveAll(updates).toList()
    }
}