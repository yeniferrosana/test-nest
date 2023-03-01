import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class createDonation {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsString()
  user: string;

  @IsNotEmpty()
  @IsUUID()
  projectId: string;
}
