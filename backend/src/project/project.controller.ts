import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/auth/decorators';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { User } from 'src/auth/entities/user.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectService } from './project.service';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('register')
  @Auth()
  //@ApiOperation({ summary: 'Create a new project' })
  //@ApiResponse({ status: 201, description: 'The project has been successfully created', type: Project })
  create(
    @Body() createProjectDto: CreateProjectDto,
    @GetUser() user: User,
    //@GetUser() organization: Organization,
  ) {
    return this.projectService.create(createProjectDto, user);
  }

  //Obtener todos los proyectos
  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  //Obtener un proyecto en partícular
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }
}
