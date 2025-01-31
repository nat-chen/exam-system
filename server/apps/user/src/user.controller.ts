import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { RedisService } from '@app/redis';

@Controller()
export class UserController {
  @Inject(RedisService)
  redisService: RedisService;

  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello() {
    const keys = await this.redisService.keys('*');
    return this.userService.getHello() + keys;
  }
}
