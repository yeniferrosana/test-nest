import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Organization } from 'src/organization/entities/organization.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) {}
  async create(
    createProjectDto: CreateProjectDto,
    user: User,
    organization: Organization,
  ) {
    //return this.projectRepository.create(createProjectDto);
    let owner: User | Organization;
    // if (user) {
    //   owner = await this.userRepository.findOne({ where: { user.id }});
    // }

    console.log(user, 'user');
    console.log(organization, 'organization');
  }

  // async findAll(): Promise<Project[]> {
  //   return this.projectRepository.findAll();
  // }

  // async findOne(id: string): Promise<Project> {
  //   return this.projectRepository.findOne(id);
  // }

  // async update(
  //   id: string,
  //   updateProjectDto: UpdateProjectDto,
  // ): Promise<Project> {
  //   return this.projectRepository.update(id, updateProjectDto);
  // }

  // async remove(id: string): Promise<void> {
  //   return this.projectRepository.remove(id);
  // }
}
