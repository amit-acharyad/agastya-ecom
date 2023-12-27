import { MigrationInterface, QueryRunner } from "typeorm";

export class Agastya1703686904066 implements MigrationInterface {
    name = 'Agastya1703686904066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "totalSales" integer)`);
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "sku" varchar NOT NULL, "price" integer NOT NULL, "costprice" integer NOT NULL, "description" varchar NOT NULL, "profilesId" integer)`);
        await queryRunner.query(`CREATE TABLE "Channel" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "url" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "profile_entity_channels_channel" ("profileEntityId" integer NOT NULL, "channelId" integer NOT NULL, PRIMARY KEY ("profileEntityId", "channelId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_52b94fe0b1814d1530e8060697" ON "profile_entity_channels_channel" ("profileEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0bb315da7d8969d24e7629f013" ON "profile_entity_channels_channel" ("channelId") `);
        await queryRunner.query(`CREATE TABLE "product_channels_channel" ("productId" integer NOT NULL, "channelId" integer NOT NULL, PRIMARY KEY ("productId", "channelId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_26d12be3b5fec6c4adb1d79284" ON "product_channels_channel" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a51dfbd87c330c075c39832b6e" ON "product_channels_channel" ("channelId") `);
        await queryRunner.query(`CREATE TABLE "channel_products_product" ("channelId" integer NOT NULL, "productId" integer NOT NULL, PRIMARY KEY ("channelId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_96bed65ec46ba37cd2a9714c1e" ON "channel_products_product" ("channelId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b6e530b8703a0f4a77fa57b12a" ON "channel_products_product" ("productId") `);
        await queryRunner.query(`CREATE TABLE "channel_profiles_product" ("channelId" integer NOT NULL, "productId" integer NOT NULL, PRIMARY KEY ("channelId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3222a1d24f8b27df869ca5e07b" ON "channel_profiles_product" ("channelId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2b5c66812ab642802c45bd612a" ON "channel_profiles_product" ("productId") `);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "sku" varchar NOT NULL, "price" integer NOT NULL, "costprice" integer NOT NULL, "description" varchar NOT NULL, "profilesId" integer, CONSTRAINT "FK_4fde595db630a1cd9899e58c27e" FOREIGN KEY ("profilesId") REFERENCES "profile_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "title", "sku", "price", "costprice", "description", "profilesId") SELECT "id", "title", "sku", "price", "costprice", "description", "profilesId" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
        await queryRunner.query(`DROP INDEX "IDX_52b94fe0b1814d1530e8060697"`);
        await queryRunner.query(`DROP INDEX "IDX_0bb315da7d8969d24e7629f013"`);
        await queryRunner.query(`CREATE TABLE "temporary_profile_entity_channels_channel" ("profileEntityId" integer NOT NULL, "channelId" integer NOT NULL, CONSTRAINT "FK_52b94fe0b1814d1530e8060697c" FOREIGN KEY ("profileEntityId") REFERENCES "profile_entity" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_0bb315da7d8969d24e7629f013c" FOREIGN KEY ("channelId") REFERENCES "Channel" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("profileEntityId", "channelId"))`);
        await queryRunner.query(`INSERT INTO "temporary_profile_entity_channels_channel"("profileEntityId", "channelId") SELECT "profileEntityId", "channelId" FROM "profile_entity_channels_channel"`);
        await queryRunner.query(`DROP TABLE "profile_entity_channels_channel"`);
        await queryRunner.query(`ALTER TABLE "temporary_profile_entity_channels_channel" RENAME TO "profile_entity_channels_channel"`);
        await queryRunner.query(`CREATE INDEX "IDX_52b94fe0b1814d1530e8060697" ON "profile_entity_channels_channel" ("profileEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0bb315da7d8969d24e7629f013" ON "profile_entity_channels_channel" ("channelId") `);
        await queryRunner.query(`DROP INDEX "IDX_26d12be3b5fec6c4adb1d79284"`);
        await queryRunner.query(`DROP INDEX "IDX_a51dfbd87c330c075c39832b6e"`);
        await queryRunner.query(`CREATE TABLE "temporary_product_channels_channel" ("productId" integer NOT NULL, "channelId" integer NOT NULL, CONSTRAINT "FK_26d12be3b5fec6c4adb1d792844" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a51dfbd87c330c075c39832b6e7" FOREIGN KEY ("channelId") REFERENCES "Channel" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("productId", "channelId"))`);
        await queryRunner.query(`INSERT INTO "temporary_product_channels_channel"("productId", "channelId") SELECT "productId", "channelId" FROM "product_channels_channel"`);
        await queryRunner.query(`DROP TABLE "product_channels_channel"`);
        await queryRunner.query(`ALTER TABLE "temporary_product_channels_channel" RENAME TO "product_channels_channel"`);
        await queryRunner.query(`CREATE INDEX "IDX_26d12be3b5fec6c4adb1d79284" ON "product_channels_channel" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a51dfbd87c330c075c39832b6e" ON "product_channels_channel" ("channelId") `);
        await queryRunner.query(`DROP INDEX "IDX_96bed65ec46ba37cd2a9714c1e"`);
        await queryRunner.query(`DROP INDEX "IDX_b6e530b8703a0f4a77fa57b12a"`);
        await queryRunner.query(`CREATE TABLE "temporary_channel_products_product" ("channelId" integer NOT NULL, "productId" integer NOT NULL, CONSTRAINT "FK_96bed65ec46ba37cd2a9714c1e2" FOREIGN KEY ("channelId") REFERENCES "Channel" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b6e530b8703a0f4a77fa57b12a4" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("channelId", "productId"))`);
        await queryRunner.query(`INSERT INTO "temporary_channel_products_product"("channelId", "productId") SELECT "channelId", "productId" FROM "channel_products_product"`);
        await queryRunner.query(`DROP TABLE "channel_products_product"`);
        await queryRunner.query(`ALTER TABLE "temporary_channel_products_product" RENAME TO "channel_products_product"`);
        await queryRunner.query(`CREATE INDEX "IDX_96bed65ec46ba37cd2a9714c1e" ON "channel_products_product" ("channelId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b6e530b8703a0f4a77fa57b12a" ON "channel_products_product" ("productId") `);
        await queryRunner.query(`DROP INDEX "IDX_3222a1d24f8b27df869ca5e07b"`);
        await queryRunner.query(`DROP INDEX "IDX_2b5c66812ab642802c45bd612a"`);
        await queryRunner.query(`CREATE TABLE "temporary_channel_profiles_product" ("channelId" integer NOT NULL, "productId" integer NOT NULL, CONSTRAINT "FK_3222a1d24f8b27df869ca5e07be" FOREIGN KEY ("channelId") REFERENCES "Channel" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2b5c66812ab642802c45bd612aa" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("channelId", "productId"))`);
        await queryRunner.query(`INSERT INTO "temporary_channel_profiles_product"("channelId", "productId") SELECT "channelId", "productId" FROM "channel_profiles_product"`);
        await queryRunner.query(`DROP TABLE "channel_profiles_product"`);
        await queryRunner.query(`ALTER TABLE "temporary_channel_profiles_product" RENAME TO "channel_profiles_product"`);
        await queryRunner.query(`CREATE INDEX "IDX_3222a1d24f8b27df869ca5e07b" ON "channel_profiles_product" ("channelId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2b5c66812ab642802c45bd612a" ON "channel_profiles_product" ("productId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_2b5c66812ab642802c45bd612a"`);
        await queryRunner.query(`DROP INDEX "IDX_3222a1d24f8b27df869ca5e07b"`);
        await queryRunner.query(`ALTER TABLE "channel_profiles_product" RENAME TO "temporary_channel_profiles_product"`);
        await queryRunner.query(`CREATE TABLE "channel_profiles_product" ("channelId" integer NOT NULL, "productId" integer NOT NULL, PRIMARY KEY ("channelId", "productId"))`);
        await queryRunner.query(`INSERT INTO "channel_profiles_product"("channelId", "productId") SELECT "channelId", "productId" FROM "temporary_channel_profiles_product"`);
        await queryRunner.query(`DROP TABLE "temporary_channel_profiles_product"`);
        await queryRunner.query(`CREATE INDEX "IDX_2b5c66812ab642802c45bd612a" ON "channel_profiles_product" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3222a1d24f8b27df869ca5e07b" ON "channel_profiles_product" ("channelId") `);
        await queryRunner.query(`DROP INDEX "IDX_b6e530b8703a0f4a77fa57b12a"`);
        await queryRunner.query(`DROP INDEX "IDX_96bed65ec46ba37cd2a9714c1e"`);
        await queryRunner.query(`ALTER TABLE "channel_products_product" RENAME TO "temporary_channel_products_product"`);
        await queryRunner.query(`CREATE TABLE "channel_products_product" ("channelId" integer NOT NULL, "productId" integer NOT NULL, PRIMARY KEY ("channelId", "productId"))`);
        await queryRunner.query(`INSERT INTO "channel_products_product"("channelId", "productId") SELECT "channelId", "productId" FROM "temporary_channel_products_product"`);
        await queryRunner.query(`DROP TABLE "temporary_channel_products_product"`);
        await queryRunner.query(`CREATE INDEX "IDX_b6e530b8703a0f4a77fa57b12a" ON "channel_products_product" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_96bed65ec46ba37cd2a9714c1e" ON "channel_products_product" ("channelId") `);
        await queryRunner.query(`DROP INDEX "IDX_a51dfbd87c330c075c39832b6e"`);
        await queryRunner.query(`DROP INDEX "IDX_26d12be3b5fec6c4adb1d79284"`);
        await queryRunner.query(`ALTER TABLE "product_channels_channel" RENAME TO "temporary_product_channels_channel"`);
        await queryRunner.query(`CREATE TABLE "product_channels_channel" ("productId" integer NOT NULL, "channelId" integer NOT NULL, PRIMARY KEY ("productId", "channelId"))`);
        await queryRunner.query(`INSERT INTO "product_channels_channel"("productId", "channelId") SELECT "productId", "channelId" FROM "temporary_product_channels_channel"`);
        await queryRunner.query(`DROP TABLE "temporary_product_channels_channel"`);
        await queryRunner.query(`CREATE INDEX "IDX_a51dfbd87c330c075c39832b6e" ON "product_channels_channel" ("channelId") `);
        await queryRunner.query(`CREATE INDEX "IDX_26d12be3b5fec6c4adb1d79284" ON "product_channels_channel" ("productId") `);
        await queryRunner.query(`DROP INDEX "IDX_0bb315da7d8969d24e7629f013"`);
        await queryRunner.query(`DROP INDEX "IDX_52b94fe0b1814d1530e8060697"`);
        await queryRunner.query(`ALTER TABLE "profile_entity_channels_channel" RENAME TO "temporary_profile_entity_channels_channel"`);
        await queryRunner.query(`CREATE TABLE "profile_entity_channels_channel" ("profileEntityId" integer NOT NULL, "channelId" integer NOT NULL, PRIMARY KEY ("profileEntityId", "channelId"))`);
        await queryRunner.query(`INSERT INTO "profile_entity_channels_channel"("profileEntityId", "channelId") SELECT "profileEntityId", "channelId" FROM "temporary_profile_entity_channels_channel"`);
        await queryRunner.query(`DROP TABLE "temporary_profile_entity_channels_channel"`);
        await queryRunner.query(`CREATE INDEX "IDX_0bb315da7d8969d24e7629f013" ON "profile_entity_channels_channel" ("channelId") `);
        await queryRunner.query(`CREATE INDEX "IDX_52b94fe0b1814d1530e8060697" ON "profile_entity_channels_channel" ("profileEntityId") `);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "sku" varchar NOT NULL, "price" integer NOT NULL, "costprice" integer NOT NULL, "description" varchar NOT NULL, "profilesId" integer)`);
        await queryRunner.query(`INSERT INTO "product"("id", "title", "sku", "price", "costprice", "description", "profilesId") SELECT "id", "title", "sku", "price", "costprice", "description", "profilesId" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`DROP INDEX "IDX_2b5c66812ab642802c45bd612a"`);
        await queryRunner.query(`DROP INDEX "IDX_3222a1d24f8b27df869ca5e07b"`);
        await queryRunner.query(`DROP TABLE "channel_profiles_product"`);
        await queryRunner.query(`DROP INDEX "IDX_b6e530b8703a0f4a77fa57b12a"`);
        await queryRunner.query(`DROP INDEX "IDX_96bed65ec46ba37cd2a9714c1e"`);
        await queryRunner.query(`DROP TABLE "channel_products_product"`);
        await queryRunner.query(`DROP INDEX "IDX_a51dfbd87c330c075c39832b6e"`);
        await queryRunner.query(`DROP INDEX "IDX_26d12be3b5fec6c4adb1d79284"`);
        await queryRunner.query(`DROP TABLE "product_channels_channel"`);
        await queryRunner.query(`DROP INDEX "IDX_0bb315da7d8969d24e7629f013"`);
        await queryRunner.query(`DROP INDEX "IDX_52b94fe0b1814d1530e8060697"`);
        await queryRunner.query(`DROP TABLE "profile_entity_channels_channel"`);
        await queryRunner.query(`DROP TABLE "Channel"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "profile_entity"`);
    }

}
