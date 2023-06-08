export type User = {
  id?: number
  email: string
  lastname: string
  firstname: string
  password: string
  verify: boolean
}

export interface IUser {
  create (user: User): Promise<User>
  findAll (): Promise<User[]>
  findOne (id: number): Promise<User>
}