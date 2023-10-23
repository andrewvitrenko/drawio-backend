/*
  Warnings:

  - Added the required column `shape` to the `Figure` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Figure" ADD COLUMN     "shape" "FigureShape" NOT NULL;
