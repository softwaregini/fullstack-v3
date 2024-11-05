package com.softwaregini.backend.software.model

import org.springframework.data.repository.CrudRepository
import java.util.UUID

interface SoftwareProductUpdateRepository : CrudRepository<SoftwareProductUpdate, UUID> {
    fun findBySoftwareProductIdOrderByUpdatedAtDesc(softwareSolutionId: UUID): List<SoftwareProductUpdate>
}