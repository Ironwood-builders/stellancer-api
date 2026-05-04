import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './wallet.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepo: Repository<Wallet>,
  ) {}

  async create(dto: CreateWalletDto): Promise<Wallet> {
    // TODO: Validate Stellar public key format via Stellar SDK
    // TODO: Check account exists on Horizon before persisting
    throw new Error('Not implemented');
  }

  async findByUserId(userId: string): Promise<Wallet[]> {
    // TODO: Query walletRepo by userId
    throw new Error('Not implemented');
  }

  async findById(id: string): Promise<Wallet> {
    // TODO: Query walletRepo by id, throw NotFoundException if missing
    throw new Error('Not implemented');
  }

  async syncBalance(id: string): Promise<Wallet> {
    // TODO: Fetch live balance from Horizon API for wallet.stellarPublicKey
    // TODO: Update wallet.balance in DB
    throw new Error('Not implemented');
  }

  async deactivate(id: string): Promise<void> {
    // TODO: Set wallet.isActive = false
    throw new Error('Not implemented');
  }
}
