import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Query,
  Patch,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorators';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { User } from 'src/auth/entities/user.entity';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationService } from './organization.service';
import { ValidRoles } from '../auth/interfaces/valid-roles.interface';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Organization')
@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}
  @Post('register')
  @Auth()
  create(
    @Body() createOrganizationDto: CreateOrganizationDto,
    @GetUser() user: User,
  ) {
    return this.organizationService.create(createOrganizationDto, user);
  }
  //Obtener todas las organizaciones, pueden filtrarsen si están registradas o no, poniendo el registered como true o false
  @Get()
  @Auth(ValidRoles.admin)
  findAll(@Query('registered') registered: boolean) {
    return this.organizationService.findAll(registered);
  }

  //Obtener una organización en partícular
  @Get(':id')
  @Auth(ValidRoles.admin)
  findOne(@Param('id') id: string) {
    return this.organizationService.findOne(id);
  }

  @Patch(':id')
  @Auth()
  update(
    @Param('id') id: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
    @GetUser() user: User,
  ) {
    return this.organizationService.update(id, updateOrganizationDto, user);
  }
}
