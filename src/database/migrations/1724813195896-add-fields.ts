import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFields1724813195896 implements MigrationInterface {
    name = 'AddFields1724813195896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "createdAt"`);
    }

}
