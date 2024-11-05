package com.softwaregini.backend.software.scheduler

import com.softwaregini.backend.software.model.SoftwareProductRepository
import com.softwaregini.backend.software.model.SoftwareProductUpdate
import com.softwaregini.backend.software.model.SoftwareProductUpdateRepository
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service

// scheduler creates random software product updates every 10 seconds
@Service
class SoftwareProductUpdateScheduler(
    private val softwareProductRepository: SoftwareProductRepository,
    private val softwareProductUpdateRepository: SoftwareProductUpdateRepository,
) {
    @Scheduled(fixedRate = 1000L * 10L)
    fun createRandomSoftwareSolutionUpdate() {
        softwareProductRepository.findAll().shuffled().firstOrNull()?.let { softwareSolution ->
            val updateCount =
                softwareProductUpdateRepository.findBySoftwareProductIdOrderByUpdatedAtDesc(softwareSolution.id).size
            softwareProductUpdateRepository.save(
                SoftwareProductUpdate(
                    softwareProductId = softwareSolution.id,
                    update = "Automatic update ${updateCount + 1}",
                    seen = false
                )
            )
        }
    }
}