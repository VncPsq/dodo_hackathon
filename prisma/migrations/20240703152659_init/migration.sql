-- SQLBook: Code
-- DropForeignKey
ALTER TABLE `Service` DROP FOREIGN KEY `Service_helperID_fkey`;

-- AlterTable
ALTER TABLE `Service` MODIFY `helperID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_helperID_fkey` FOREIGN KEY (`helperID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
