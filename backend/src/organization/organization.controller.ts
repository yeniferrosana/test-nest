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

  @Get()
  @Auth(ValidRoles.admin)
  findAll(@Query('registered') registered: boolean) {
    return this.organizationService.findAll(registered);
  }

  @Get(':id')
  @Auth(ValidRoles.admin)
  findOne(@Param('id') id: string) {
    console.log('ss');
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
