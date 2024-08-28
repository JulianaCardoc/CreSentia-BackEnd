import { MigrationInterface, QueryRunner } from "typeorm";

export class EntityModification1724863446904 implements MigrationInterface {
    name = 'EntityModification1724863446904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

}
