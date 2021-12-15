import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';

import * as SYNC_COWORKERS from './data/sync_coworkers.json';

@Controller('v1/syncs')
export class SyncV1Controller {
  @Get(':revNum/coworkers')
  public async syncCoworkers(
    @Param('revNum') revNum: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SYNC_COWORKERS);
  }
}
