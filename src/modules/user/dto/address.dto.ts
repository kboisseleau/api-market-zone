import { IsString, IsNotEmpty } from 'class-validator'

export class AddressDTO {

  @IsNotEmpty()
  @IsString()
  public address

  @IsNotEmpty()
  @IsString()
  public city

}
