import { Body, Controller, Post } from '@nestjs/common';
import { GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { Organization } from 'src/organization/entities/organization.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('register')
  //@ApiOperation({ summary: 'Create a new project' })
  //@ApiResponse({ status: 201, description: 'The project has been successfully created', type: Project })
  create(
    @Body() createProjectDto: CreateProjectDto,
    @GetUser() user: User,
    @GetUser() organization: Organization,
  ) {
    return this.projectService.create(createProjectDto, user, organization);
  }
}
