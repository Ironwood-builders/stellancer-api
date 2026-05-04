import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum EscrowStatus {
  LOCKED = 'locked',
  RELEASED = 'released',
  REFUNDED = 'refunded',
  DISPUTED = 'disputed',
}

@Entity('escrows')
export class Escrow {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  clientWalletId: string;

  @Column()
  freelancerWalletId: string;

  @Column({ type: 'decimal', precision: 20, scale: 7 })
  amount: number;

  @Column({ default: 'XLM' })
  assetCode: string;

  @Column({ nullable: true })
  assetIssuer: string;

  @Column({ type: 'enum', enum: EscrowStatus, default: EscrowStatus.LOCKED })
  status: EscrowStatus;

  @Column({ nullable: true })
  contractId: string;

  @Column({ nullable: true })
  releaseTxHash: string;

  @Column({ nullable: true })
  milestoneId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
