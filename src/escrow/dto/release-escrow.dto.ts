import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReleaseEscrowDto {
  @ApiProperty({ description: 'ID of the escrow to release' })
  @IsString()
  @IsNotEmpty()
  escrowId: string;
}
