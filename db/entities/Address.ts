import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity({ schema: 'market', name: 'address' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  address: string
  
  @Column()
  city: string

  @OneToMany(_type => User, user => user.oAddress)
  toUser: User[]

}
