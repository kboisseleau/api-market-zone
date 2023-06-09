/* eslint-disable @typescript-eslint/naming-convention */
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { ENVIRONMENTS } from '../enums/env.enum'

class EnvironmentVariables {
  @IsEnum(ENVIRONMENTS)
  public ENVIRONMENT: ENVIRONMENTS

  @IsString()
  @IsNotEmpty()
  public DATABASE_HOST: string

  @IsNumber()
  public DATABASE_PORT: number

  @IsString()
  @IsNotEmpty()
  public DATABASE_NAME: string

  @IsString()
  @IsNotEmpty()
  public DATABASE_USERNAME: string

  @IsString()
  @IsNotEmpty()
  public DATABASE_PASSWORD: string

  @IsString()
  @IsNotEmpty()
  public DBPATH: string
}

export { EnvironmentVariables }