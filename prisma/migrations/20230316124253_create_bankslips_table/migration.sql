-- CreateTable
CREATE TABLE `bankslips` (
    `id` VARCHAR(191) NOT NULL,
    `due_date` DATETIME(3) NOT NULL,
    `total_in_cents` DECIMAL(65, 30) NOT NULL,
    `customer` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'PAID', 'CANCELED') NOT NULL,
    `payment_date` DATETIME(3) NOT NULL,
    `fine` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
