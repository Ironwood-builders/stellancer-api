import { IsString, IsNotEmpty, IsNumber, IsPositive, IsOptional, Length, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePayoutDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  walletId: string;

  @ApiProperty({ description: 'Stellar recipient address (G...)' })
  @IsString()
  @IsNotEmpty()
  @Length(56, 56)
  recipientAddress: string;

  @ApiProperty({ minimum: 0.0000001 })
  @IsNumber()
  @IsPositive()
  @Min(0.0000001)
  amount: number;

  @ApiPropertyOptional({ default: 'XLM' })
  @IsString()
  @IsOptional()
  assetCode?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  assetIssuer?: string;
}
