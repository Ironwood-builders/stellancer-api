import { IsString, IsNotEmpty, IsNumber, IsPositive, IsOptional, Length, Min, IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PayoutRecipientDto {
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

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  reference?: string;
}

export class CreateBatchPayoutDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  walletId: string;

  @ApiProperty({ type: [PayoutRecipientDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PayoutRecipientDto)
  recipients: PayoutRecipientDto[];

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
  description?: string;
}