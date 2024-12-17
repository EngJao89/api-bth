-- CreateTable
CREATE TABLE "ongs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "ongs_email_key" ON "ongs"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ongs_phone_key" ON "ongs"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "ongs_city_key" ON "ongs"("city");
