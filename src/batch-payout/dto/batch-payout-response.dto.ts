import { ApiProperty } from '@nestjs/swagger';

export class BatchPayoutRecipientResponseDto {
  @ApiProperty()
  recipientAddress: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  reference?: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  stellarTxHash?: string;

  @ApiProperty()
  failureReason?: string;
}

export class BatchPayoutResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  walletId: string;

  @ApiProperty()
  assetCode: string;

  @ApiProperty()
  assetIssuer?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  totalAmount: number;

  @ApiProperty()
  recipientCount: number;

  @ApiProperty({ type: [BatchPayoutRecipientResponseDto] })
  recipients: BatchPayoutRecipientResponseDto[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}