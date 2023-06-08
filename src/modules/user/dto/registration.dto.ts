import { Type } from 'class-transformer'
import { IsString, IsNotEmpty, IsEmail, IsBoolean, ValidateNested } from 'class-validator'
import { AddressDTO } from './address.dto'

export class RegistrationDTO {

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email

  @IsNotEmpty()
  @IsString()
  public firstname

  @IsNotEmpty()
  @IsString()
  public lastname

  @IsNotEmpty()
  @IsString()
  public password

  @IsNotEmpty()
  @IsBoolean()
  public verify

  @ValidateNested()
  @Type(() => AddressDTO)
  oAddress: AddressDTO

}
