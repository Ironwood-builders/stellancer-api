import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletsModule } from './wallets/wallets.module';
import { PayoutsModule } from './payouts/payouts.module';
import { EscrowModule } from './escrow/escrow.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: false, // 🔧 Developer must run migrations
      }),
    }),
    WalletsModule,
    PayoutsModule,
    EscrowModule,
  ],
})
export class AppModule {}
