package com.softwaregini.backend.software.model

import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name = "software_products")
class SoftwareProduct(
    @Id
    val id: UUID = UUID.randomUUID(),
    val name: String,
    @Enumerated(EnumType.STRING)
    val segment: ProductSegment
)

enum class ProductSegment {
    ENTERPRISE,
    MID_MARKET,
    SMALL_BUSINESS,
    CONSUMER
}