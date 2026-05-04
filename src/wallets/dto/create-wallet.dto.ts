import { IsString, IsNotEmpty, IsOptional, Length } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateWalletDto {
  @ApiProperty({ description: 'Stellar public key (G...)' })
  @IsString()
  @IsNotEmpty()
  @Length(56, 56)
  stellarPublicKey: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiPropertyOptional({ default: 'XLM' })
  @IsString()
  @IsOptional()
  assetCode?: string;

  @ApiPropertyOptional({ description: 'Issuer address for non-native assets' })
  @IsString()
  @IsOptional()
  assetIssuer?: string;
}
