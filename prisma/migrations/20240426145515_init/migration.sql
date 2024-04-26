-- CreateTable
CREATE TABLE "DonorInformation" (
    "id" TEXT NOT NULL,
    "Last Name (2)" TEXT NOT NULL,
    "First Name (3)" TEXT NOT NULL,
    "Middle Name (4)" TEXT,
    "AGE (5)" INTEGER NOT NULL,
    "SEX (6)" TEXT NOT NULL,
    "Acquired Date (7)" TIMESTAMP(3) NOT NULL,
    "Practioner Name (8)" TEXT NOT NULL,

    CONSTRAINT "DonorInformation_pkey" PRIMARY KEY ("id")
);
