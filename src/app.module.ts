import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvModule } from './modules/config/env/env.module'
import { DatabaseModule } from './modules/config/database/database.module'
import { UserModule } from './modules/user/user.module'
import { AuthentificationModule } from './modules/authentification/authentification.module'

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    UserModule,
    AuthentificationModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ]
})
export class AppModule {}
