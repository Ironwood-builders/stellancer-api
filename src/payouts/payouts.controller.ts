import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PayoutsService } from './payouts.service';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { Payout } from './payout.entity';

@ApiTags('payouts')
@ApiBearerAuth()
@Controller('payouts')
export class PayoutsController {
  constructor(private readonly payoutsService: PayoutsService) {}

  @Post()
  @ApiOperation({ summary: 'Initiate a payout' })
  @ApiResponse({ status: 201, type: Payout })
  create(@Body() dto: CreatePayoutDto): Promise<Payout> {
    return this.payoutsService.create(dto);
  }

  @Post(':id/process')
  @ApiOperation({ summary: 'Process a pending payout via Stellar' })
  @ApiResponse({ status: 200, type: Payout })
  process(@Param('id') id: string): Promise<Payout> {
    return this.payoutsService.process(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get payout by ID' })
  @ApiResponse({ status: 200, type: Payout })
  findOne(@Param('id') id: string): Promise<Payout> {
    return this.payoutsService.findById(id);
  }

  @Get('wallet/:walletId')
  @ApiOperation({ summary: 'List payouts for a wallet' })
  @ApiResponse({ status: 200, type: [Payout] })
  findByWallet(@Param('walletId') walletId: string): Promise<Payout[]> {
    return this.payoutsService.findByWalletId(walletId);
  }
}
