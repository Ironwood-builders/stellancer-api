import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PayoutsService } from './payouts.service';
import { Payout, PayoutStatus } from './payout.entity';

const mockPayoutRepo = () => ({
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
});

describe('PayoutsService', () => {
  let service: PayoutsService;
  let repo: jest.Mocked<Partial<Repository<Payout>>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PayoutsService,
        { provide: getRepositoryToken(Payout), useFactory: mockPayoutRepo },
      ],
    }).compile();

    service = module.get<PayoutsService>(PayoutsService);
    repo = module.get(getRepositoryToken(Payout));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should persist a payout with PENDING status', async () => {
      // TODO: mock repo.save, assert status === PayoutStatus.PENDING
    });

    it('should throw if wallet has insufficient balance', async () => {
      // TODO: mock wallet balance check failure
    });
  });

  describe('process', () => {
    it('should submit Stellar transaction and set status to COMPLETED', async () => {
      // TODO: mock Stellar SDK submit, assert stellarTxHash set and status COMPLETED
    });

    it('should set status to FAILED on Stellar submission error', async () => {
      // TODO: mock Stellar SDK throw, assert status FAILED and failureReason set
    });
  });

  describe('findById', () => {
    it('should return a payout by id', async () => {
      // TODO: mock repo.findOne, assert result
    });

    it('should throw NotFoundException when payout not found', async () => {
      // TODO: mock repo.findOne returning null, assert NotFoundException
    });
  });

  describe('findByStatus', () => {
    it('should return payouts filtered by status', async () => {
      // TODO: mock repo.find with status filter, assert result array
    });
  });
});
