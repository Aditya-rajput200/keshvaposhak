/*
  Warnings:

  - Added the required column `url` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "description" TEXT,
ADD COLUMN     "url" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
