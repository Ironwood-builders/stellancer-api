import { Controller, Get, Post, Delete, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Wallet } from './wallet.entity';

@ApiTags('wallets')
@ApiBearerAuth()
@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  @ApiOperation({ summary: 'Register a Stellar wallet' })
  @ApiResponse({ status: 201, type: Wallet })
  create(@Body() dto: CreateWalletDto): Promise<Wallet> {
    return this.walletsService.create(dto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'List wallets for a user' })
  @ApiResponse({ status: 200, type: [Wallet] })
  findByUser(@Param('userId') userId: string): Promise<Wallet[]> {
    return this.walletsService.findByUserId(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get wallet by ID' })
  @ApiResponse({ status: 200, type: Wallet })
  findOne(@Param('id') id: string): Promise<Wallet> {
    return this.walletsService.findById(id);
  }

  @Post(':id/sync-balance')
  @ApiOperation({ summary: 'Sync wallet balance from Horizon' })
  @ApiResponse({ status: 200, type: Wallet })
  syncBalance(@Param('id') id: string): Promise<Wallet> {
    return this.walletsService.syncBalance(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deactivate a wallet' })
  @ApiResponse({ status: 204 })
  deactivate(@Param('id') id: string): Promise<void> {
    return this.walletsService.deactivate(id);
  }
}
