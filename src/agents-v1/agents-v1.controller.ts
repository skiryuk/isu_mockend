import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { IAgentCheckRequest, IAgentRegisterRequest } from './agents-v1.models';

import * as REGISTER_AGENT_MOCK from './data/register-agent.json';
import * as CHECK_AGENT_MOCK from './data/check-agent.json';

@Controller('v1/agents')
export class AgentsV1Controller {
  @Post('register')
  public async register(
    @Body() req: IAgentRegisterRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(REGISTER_AGENT_MOCK);
  }

  @Post('check')
  public async check(@Body() req: IAgentCheckRequest, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(CHECK_AGENT_MOCK);
  }
}
