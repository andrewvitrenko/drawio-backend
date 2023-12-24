-- CreateTable
CREATE TABLE "FigureConnection" (
    "id" SERIAL NOT NULL,
    "srcId" INTEGER NOT NULL,
    "distId" INTEGER NOT NULL,

    CONSTRAINT "FigureConnection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FigureConnection_srcId_distId_key" ON "FigureConnection"("srcId", "distId");

-- AddForeignKey
ALTER TABLE "FigureConnection" ADD CONSTRAINT "FigureConnection_srcId_fkey" FOREIGN KEY ("srcId") REFERENCES "Figure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FigureConnection" ADD CONSTRAINT "FigureConnection_distId_fkey" FOREIGN KEY ("distId") REFERENCES "Figure"("id") ON DELETE CASCADE ON UPDATE CASCADE;
