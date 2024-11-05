package com.softwaregini.backend.software.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.time.Instant
import java.util.UUID

@Entity
@Table(name = "software_product_updates")
class SoftwareProductUpdate(
    @Id
    val id: UUID = UUID.randomUUID(),
    val softwareProductId: UUID,
    val update: String,
    var seen: Boolean,
    var updatedAt: Instant = Instant.now()
)