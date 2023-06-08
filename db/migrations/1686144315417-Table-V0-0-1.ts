import { MigrationInterface, QueryRunner } from 'typeorm'

export class TableV0011686144315417 implements MigrationInterface {
  name = 'TableV0011686144315417'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "market"."address" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "city" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`)
    await queryRunner.query(`CREATE TABLE "market"."user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "lastname" character varying NOT NULL, "firstname" character varying NOT NULL, "password" character varying NOT NULL, "verify" boolean NOT NULL, "idaddress" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`)
    await queryRunner.query(`ALTER TABLE "market"."user" ADD CONSTRAINT "FK_7d7e3e1a1de033fdd7e69992db5" FOREIGN KEY ("idaddress") REFERENCES "market"."address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "market"."user" DROP CONSTRAINT "FK_7d7e3e1a1de033fdd7e69992db5"`)
    await queryRunner.query(`DROP TABLE "market"."user"`)
    await queryRunner.query(`DROP TABLE "market"."address"`)
  }

}
