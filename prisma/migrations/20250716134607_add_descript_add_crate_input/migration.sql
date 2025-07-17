/*
  Warnings:

  - You are about to drop the column `timestamp` on the `Meal` table. All the data in the column will be lost.
  - Added the required column `description` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meal" DROP COLUMN "timestamp",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL;
