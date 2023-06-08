import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Address } from './Address'

@Entity({ schema: 'market', name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string
  
  @Column()
  lastname: string
  
  @Column()
  firstname: string

  @Column()
  password: string

  @Column()
  verify: boolean

  // ----------------------------------- Address
  @Column({ name: 'idaddress', nullable: true })
  idAddress: number

  @ManyToOne(_type => Address, address => address.id, { cascade: true })
  @JoinColumn({ name: 'idaddress' })
  oAddress: Address
  // -----------------------------------
}
