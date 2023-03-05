-- CreateTable
CREATE TABLE "relay" (
    "ukey" SERIAL NOT NULL,
    "status_relay" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "relay_pkey" PRIMARY KEY ("ukey")
);

-- CreateTable
CREATE TABLE "dht" (
    "ukey" SERIAL NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dht_pkey" PRIMARY KEY ("ukey")
);
