import { User } from '../model/User'

export interface IUserRepository {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: number): Promise<User>
  findOneEmail(email: string): Promise<User | null>
  remove(id: number): void
}
  
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UserRepository = Symbol('IUserRepository')