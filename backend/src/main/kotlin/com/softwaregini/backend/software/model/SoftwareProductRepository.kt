package com.softwaregini.backend.software.model

import org.springframework.data.repository.CrudRepository
import java.util.UUID

interface SoftwareProductRepository : CrudRepository<SoftwareProduct, UUID>