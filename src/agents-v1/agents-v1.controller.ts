import { Controller, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import * as REGISTER_AGENT_MOCK from './data/register-agent.json';
import * as CHECK_AGENT_MOCK from './data/check-agent.json';

@Controller('v1/agents')
export class AgentsV1Controller {
  @Post('register')
  public async register(
    @Query('AgentType') agentType: string,
    @Query('AppVersion') appVersion: string,
    @Query('OsType') osType: string,
    @Query('DeviceInfo') deviceInfo: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(REGISTER_AGENT_MOCK);
  }

  @Post('check')
  public async check(
    @Query('AgentType') agentType: string,
    @Query('AppVersion') appVersion: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CHECK_AGENT_MOCK);
  }
}
