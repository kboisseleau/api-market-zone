
import { DataSource } from 'typeorm'
import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'
import { User } from './db/entities/User'
import { Address } from './db/entities/Address'
import { TableV0011686144315417 } from './db/migrations/1686144315417-Table-V0-0-1'
 
config({ path: 'env/.env.local' })
 
const configService = new ConfigService()

export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  synchronize: false,
  entities: [ User, Address ],
  migrations: [ TableV0011686144315417 ]
})