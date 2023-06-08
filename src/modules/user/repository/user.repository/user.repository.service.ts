import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { IUserRepository } from 'src/modules/user/repository/user.repository'
import { User as UserEntity } from 'db/entities/User'
import { User } from '../../model/User'

@Injectable()
export class UserRepositoryService implements IUserRepository {
  constructor (
    @InjectRepository(UserEntity)
    private _usersRepository: Repository<UserEntity>
  ) {}

  create (user: User): Promise<User> {
    return this._usersRepository.save(user)
  }

  findAll (): Promise<User[]> {
    return this._usersRepository.find()
  }

  findOne (id: number): Promise<User | null> {
    return this._usersRepository.findOneBy({ id })
  }

  findOneEmail (email: string): Promise<User | null> {
    return this._usersRepository.findOneBy({ email })
  }

  async remove (id: number): Promise<void> {
    await this._usersRepository.delete(id)
  }

  async save (data: Partial<User>): Promise<User> {    
    return await this._usersRepository.save(data)  
  }
}
