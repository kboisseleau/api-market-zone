
import { DataSource } from 'typeorm'
import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'
 
config({ path: 'env/.env.development' })
 
const configService = new ConfigService()
const dbPath = configService.getOrThrow<string>('DBPATH') || 'dist/db'

const entitiesPath = `${dbPath}/entities/**/*.js`
const migrationssPath = `${dbPath}/migrations/*.js`
export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities: [ entitiesPath ],
  migrations: [ migrationssPath ]
})