import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { UserRepositoryService } from '../../repository/user.repository/user.repository.service'
import { User } from '../../model/User'
import { plainToInstance } from 'class-transformer'
import { User as UserEntity } from 'db/entities/User'
import { RegistrationDTO } from '../../dto/registration.dto'

@Injectable()
export class UserService {
        
  constructor (private _userRepositoryService: UserRepositoryService) {}
    
  async create (user: RegistrationDTO): Promise<User> {
    this._verifyExistEmail(user.email)
    const userEntity = plainToInstance(UserEntity, user, { enableImplicitConversion: true })
    return this._userRepositoryService.create(userEntity)
  }

  findAll (): Promise<User[]> {
    return this._userRepositoryService.findAll()
  }

  findOneEmail (email: string): Promise<User | null> {
    try {
      return this._userRepositoryService.findOneEmail(email)
    } catch (e) {
      throw new NotFoundException()
    }
  }

  findOne (id: number): Promise<User> {
    try {
      return this._userRepositoryService.findOne(id)
    } catch (e) {
      throw new NotFoundException()
    }
  }

  private async _verifyExistEmail (email: string) {
    const user = await this.findOneEmail(email)

    if (user) {
      throw new BadRequestException('Un utilisateur avec la même adresse email existe déjà')
    }
  }

}
