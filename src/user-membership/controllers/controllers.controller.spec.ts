import { Test, TestingModule } from '@nestjs/testing';
import { UserMembershipController } from './userMembership.controller';

describe('UserMembershipController', () => {
  let controller: UserMembershipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMembershipController],
    }).compile();

    controller = module.get<UserMembershipController>(UserMembershipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
