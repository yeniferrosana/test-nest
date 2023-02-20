import { Module } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { Donation } from './entities/donation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DonationController],
  providers: [DonationService],
  imports: [TypeOrmModule.forFeature([Donation])],
})
export class DonationModule {}
