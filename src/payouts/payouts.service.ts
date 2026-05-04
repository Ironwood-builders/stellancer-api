import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payout, PayoutStatus } from './payout.entity';
import { CreatePayoutDto } from './dto/create-payout.dto';

@Injectable()
export class PayoutsService {
  constructor(
    @InjectRepository(Payout)
    private readonly payoutRepo: Repository<Payout>,
  ) {}

  async create(dto: CreatePayoutDto): Promise<Payout> {
    // TODO: Validate source wallet exists and has sufficient balance
    // TODO: Persist payout record with status PENDING
    throw new Error('Not implemented');
  }

  async process(id: string): Promise<Payout> {
    // TODO: Build and sign Stellar payment transaction via SDK
    // TODO: Submit to Horizon, capture stellarTxHash
    // TODO: Update status to COMPLETED or FAILED
    throw new Error('Not implemented');
  }

  async findById(id: string): Promise<Payout> {
    // TODO: Query payoutRepo by id, throw NotFoundException if missing
    throw new Error('Not implemented');
  }

  async findByWalletId(walletId: string): Promise<Payout[]> {
    // TODO: Query payoutRepo by walletId
    throw new Error('Not implemented');
  }

  async findByStatus(status: PayoutStatus): Promise<Payout[]> {
    // TODO: Query payoutRepo by status (used by batch processor)
    throw new Error('Not implemented');
  }
}
