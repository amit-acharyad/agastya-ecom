import { MigrationInterface, QueryRunner } from "typeorm";

export class Agastya1703671752276 implements MigrationInterface {
    name = 'Agastya1703671752276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "slug"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "slug" character varying NOT NULL`);
    }

}
