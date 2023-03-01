import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { Repository } from 'typeorm';
import { createDonation } from './dto/createDonation.dto';
import { Donation } from './entities/donation.entity';

@Injectable()
export class DonationService {
  constructor(
    @InjectRepository(Donation)
    private readonly donationRepository: Repository<Donation>,
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createDonation: createDonation) {
    try {
      const { user, amount, projectId } = createDonation;
      let user_name: string;

      user ? (user_name = user) : (user_name = 'Usuario Anónimo');

      const project = await this.projectRepository.findOneBy({ id: projectId });

      const donation = this.donationRepository.create({
        status: 'finished',
        amount,
        user: user_name,
        created_at: new Date(),
      });

      donation.project = project;

      await this.donationRepository.save(donation);

      return {
        donation,
      };
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    console.log(error);

    throw new InternalServerErrorException('Por favor revisa los logs');
  }
}
