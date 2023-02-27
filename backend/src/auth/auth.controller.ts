import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
// import { GetUser } from './decorators';
import { LoginUserDto, CreateUserDto } from './dto';
// import { User } from './entities/user.entity';
// import { UserRoleGuard } from './guards/user-role.guard';
// import { RoleProtected } from './decorators/role-protected.decorator';
// import { ValidRoles } from './interfaces';
// import { Auth } from './decorators/auth.decorator';

@ApiTags('Auth User')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
