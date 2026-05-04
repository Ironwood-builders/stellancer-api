import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletsService } from './wallets.service';
import { Wallet } from './wallet.entity';

const mockWalletRepo = () => ({
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
});

describe('WalletsService', () => {
  let service: WalletsService;
  let repo: jest.Mocked<Partial<Repository<Wallet>>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WalletsService,
        { provide: getRepositoryToken(Wallet), useFactory: mockWalletRepo },
      ],
    }).compile();

    service = module.get<WalletsService>(WalletsService);
    repo = module.get(getRepositoryToken(Wallet));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should persist a new wallet', async () => {
      // TODO: mock repo.save, assert returned wallet matches dto
    });

    it('should throw if Stellar public key is invalid', async () => {
      // TODO: mock Stellar SDK validation failure
    });
  });

  describe('findByUserId', () => {
    it('should return wallets for a given userId', async () => {
      // TODO: mock repo.find, assert result array
    });
  });

  describe('findById', () => {
    it('should return a wallet by id', async () => {
      // TODO: mock repo.findOne, assert result
    });

    it('should throw NotFoundException when wallet not found', async () => {
      // TODO: mock repo.findOne returning null, assert NotFoundException
    });
  });

  describe('syncBalance', () => {
    it('should update balance from Horizon API', async () => {
      // TODO: mock Horizon response, assert repo.update called with new balance
    });
  });

  describe('deactivate', () => {
    it('should set isActive to false', async () => {
      // TODO: mock repo.update, assert called with { isActive: false }
    });
  });
});
