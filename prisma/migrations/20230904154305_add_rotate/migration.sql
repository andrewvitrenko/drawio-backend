/*
  Warnings:

  - Made the column `sceneId` on table `Figure` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "FigureShape" AS ENUM ('CIRCLE', 'RECTANGLE', 'TRIANGLE', 'LINE');

-- DropForeignKey
ALTER TABLE "Figure" DROP CONSTRAINT "Figure_sceneId_fkey";

-- AlterTable
ALTER TABLE "Figure" ADD COLUMN     "rotate" DOUBLE PRECISION,
ALTER COLUMN "sceneId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Figure" ADD CONSTRAINT "Figure_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "Scene"("id") ON DELETE CASCADE ON UPDATE CASCADE;
