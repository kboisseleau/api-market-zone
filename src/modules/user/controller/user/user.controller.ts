import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common'
import { UserService } from '../../services/user/user.service'
import { RegistrationDTO } from '../../dto/registration.dto'
import { User } from '../../model/User'
import { JwtAuthGuard } from 'src/modules/authentification/guard/jwt-auth.guard'

@Controller('user')
export class UserController {
  constructor (private _userService: UserService) {}

  @Post('signup')
  signUp (@Body() registration: RegistrationDTO): Promise<User> {
    return this._userService.create(registration)
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  findAll (): Promise<User[]> {
    return this._userService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne (@Param('id') id: number): Promise<User> {
    return this._userService.findOne(id)
  }
}
