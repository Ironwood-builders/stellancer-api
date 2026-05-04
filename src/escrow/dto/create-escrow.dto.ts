import { IsString, IsNotEmpty, IsNumber, IsPositive, IsOptional, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEscrowDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  clientWalletId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  freelancerWalletId: string;

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

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  milestoneId?: string;
}
