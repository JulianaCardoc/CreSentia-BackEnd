import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1724810237428 implements MigrationInterface {
    name = 'Init1724810237428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "nickname" character varying(255) NOT NULL, CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb" UNIQUE ("email"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
