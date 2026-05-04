import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EscrowService } from './escrow.service';
import { CreateEscrowDto } from './dto/create-escrow.dto';
import { ReleaseEscrowDto } from './dto/release-escrow.dto';
import { Escrow } from './escrow.entity';

@ApiTags('escrow')
@ApiBearerAuth()
@Controller('escrow')
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Post()
  @ApiOperation({ summary: 'Lock funds in escrow' })
  @ApiResponse({ status: 201, type: Escrow })
  create(@Body() dto: CreateEscrowDto): Promise<Escrow> {
    return this.escrowService.create(dto);
  }

  @Post('release')
  @ApiOperation({ summary: 'Release escrow funds to freelancer' })
  @ApiResponse({ status: 200, type: Escrow })
  release(@Body() dto: ReleaseEscrowDto): Promise<Escrow> {
    return this.escrowService.release(dto);
  }

  @Post(':id/refund')
  @ApiOperation({ summary: 'Refund escrow to client' })
  @ApiResponse({ status: 200, type: Escrow })
  refund(@Param('id') id: string): Promise<Escrow> {
    return this.escrowService.refund(id);
  }

  @Post(':id/dispute')
  @ApiOperation({ summary: 'Mark escrow as disputed' })
  @ApiResponse({ status: 200, type: Escrow })
  dispute(@Param('id') id: string): Promise<Escrow> {
    return this.escrowService.dispute(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get escrow by ID' })
  @ApiResponse({ status: 200, type: Escrow })
  findOne(@Param('id') id: string): Promise<Escrow> {
    return this.escrowService.findById(id);
  }

  @Get('wallet/:walletId')
  @ApiOperation({ summary: 'List escrows for a wallet' })
  @ApiResponse({ status: 200, type: [Escrow] })
  findByWallet(@Param('walletId') walletId: string): Promise<Escrow[]> {
    return this.escrowService.findByWalletId(walletId);
  }
}
