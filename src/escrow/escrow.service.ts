import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Escrow, EscrowStatus } from './escrow.entity';
import { CreateEscrowDto } from './dto/create-escrow.dto';
import { ReleaseEscrowDto } from './dto/release-escrow.dto';

@Injectable()
export class EscrowService {
  constructor(
    @InjectRepository(Escrow)
    private readonly escrowRepo: Repository<Escrow>,
  ) {}

  async create(dto: CreateEscrowDto): Promise<Escrow> {
    // TODO: Lock funds on Stellar via claimable balance or escrow account
    // TODO: Persist escrow record with status LOCKED
    throw new Error('Not implemented');
  }

  async release(dto: ReleaseEscrowDto): Promise<Escrow> {
    // TODO: Verify escrow is in LOCKED status
    // TODO: Submit Stellar transaction to release funds to freelancerWalletId
    // TODO: Update status to RELEASED, store releaseTxHash
    throw new Error('Not implemented');
  }

  async refund(id: string): Promise<Escrow> {
    // TODO: Verify escrow is in LOCKED or DISPUTED status
    // TODO: Submit Stellar transaction to return funds to clientWalletId
    // TODO: Update status to REFUNDED
    throw new Error('Not implemented');
  }

  async dispute(id: string): Promise<Escrow> {
    // TODO: Transition escrow status to DISPUTED
    // TODO: Trigger webhook notification to both parties
    throw new Error('Not implemented');
  }

  async findById(id: string): Promise<Escrow> {
    // TODO: Query escrowRepo by id, throw NotFoundException if missing
    throw new Error('Not implemented');
  }

  async findByWalletId(walletId: string): Promise<Escrow[]> {
    // TODO: Query escrowRepo where clientWalletId OR freelancerWalletId matches
    throw new Error('Not implemented');
  }
}
