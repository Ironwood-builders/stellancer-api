import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escrow } from './escrow.entity';
import { EscrowService } from './escrow.service';
import { EscrowController } from './escrow.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Escrow])],
  controllers: [EscrowController],
  providers: [EscrowService],
  exports: [EscrowService],
})
export class EscrowModule {}
