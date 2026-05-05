import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BatchPayout } from './batch-payout.entity';
import { BatchPayoutService } from './batch-payout.service';
import { BatchPayoutController } from './batch-payout.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BatchPayout])],
  controllers: [BatchPayoutController],
  providers: [BatchPayoutService],
  exports: [BatchPayoutService],
})
export class BatchPayoutModule {}