import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';

export enum BatchPayoutStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  PARTIALLY_FAILED = 'partially_failed',
  FAILED = 'failed',
}

@Entity('batch_payouts')
export class BatchPayout {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  walletId: string;

  @Column({ default: 'XLM' })
  assetCode: string;

  @Column({ nullable: true })
  assetIssuer: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'enum', enum: BatchPayoutStatus, default: BatchPayoutStatus.PENDING })
  status: BatchPayoutStatus;

  @Column({ type: 'decimal', precision: 20, scale: 7 })
  totalAmount: number;

  @Column({ type: 'int' })
  recipientCount: number;

  @Column({ nullable: true })
  stellarTxHash: string;

  @Column({ nullable: true })
  failureReason: string;

  @OneToMany(() => BatchPayoutRecipient, recipient => recipient.batchPayout, { cascade: true })
  recipients: BatchPayoutRecipient[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity('batch_payout_recipients')
export class BatchPayoutRecipient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  batchPayoutId: string;

  @Column()
  recipientAddress: string;

  @Column({ type: 'decimal', precision: 20, scale: 7 })
  amount: number;

  @Column({ nullable: true })
  reference: string;

  @Column({ type: 'enum', enum: BatchPayoutStatus, default: BatchPayoutStatus.PENDING })
  status: BatchPayoutStatus;

  @Column({ nullable: true })
  stellarTxHash: string;

  @Column({ nullable: true })
  failureReason: string;

  @ManyToOne(() => BatchPayout, batchPayout => batchPayout.recipients)
  batchPayout: BatchPayout;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}