import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EscrowService } from './escrow.service';
import { Escrow, EscrowStatus } from './escrow.entity';

const mockEscrowRepo = () => ({
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
});

describe('EscrowService', () => {
  let service: EscrowService;
  let repo: jest.Mocked<Partial<Repository<Escrow>>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EscrowService,
        { provide: getRepositoryToken(Escrow), useFactory: mockEscrowRepo },
      ],
    }).compile();

    service = module.get<EscrowService>(EscrowService);
    repo = module.get(getRepositoryToken(Escrow));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should lock funds and persist escrow with LOCKED status', async () => {
      // TODO: mock Stellar claimable balance creation, assert status === EscrowStatus.LOCKED
    });
  });

  describe('release', () => {
    it('should release funds and set status to RELEASED', async () => {
      // TODO: mock findById returning LOCKED escrow, mock Stellar tx, assert RELEASED
    });

    it('should throw if escrow is not in LOCKED status', async () => {
      // TODO: mock findById returning RELEASED escrow, assert BadRequestException
    });
  });

  describe('refund', () => {
    it('should refund funds and set status to REFUNDED', async () => {
      // TODO: mock Stellar tx, assert status REFUNDED
    });
  });

  describe('dispute', () => {
    it('should transition status to DISPUTED', async () => {
      // TODO: mock repo.update, assert status DISPUTED
    });

    it('should trigger webhook notification', async () => {
      // TODO: mock webhook service, assert called with both party wallet IDs
    });
  });

  describe('findById', () => {
    it('should return an escrow by id', async () => {
      // TODO: mock repo.findOne, assert result
    });

    it('should throw NotFoundException when escrow not found', async () => {
      // TODO: mock repo.findOne returning null, assert NotFoundException
    });
  });
});
