import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('wallets')
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  stellarPublicKey: string;

  @Column()
  userId: string;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  balance: number;

  @Column({ default: 'XLM' })
  assetCode: string;

  @Column({ nullable: true })
  assetIssuer: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
