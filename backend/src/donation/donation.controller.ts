import { Body, Controller, Post } from '@nestjs/common';
import { DonationService } from './donation.service';
import { PaymentData } from './dto/paymentData.dto';
import { MercadoPagoService } from './mercadoPago.service';

@Controller('donation')
export class DonationController {
  constructor(
    private readonly donationService: DonationService,
    private readonly mercadoPagoService: MercadoPagoService,
  ) {}

  @Post('mp')
  async payment(@Body() body: PaymentData): Promise<any> {
    const initPoint = await this.mercadoPagoService.payment(body);
    return { initPoint };
  }
}
